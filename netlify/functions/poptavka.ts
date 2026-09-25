// Netlify Function backing the inquiry form (src/components/Poptavka.astro).
// Requires env vars: RESEND_API_KEY, NOTIFY_EMAIL (defaults to site.config's
// {{EMAIL}} once set), FORM_FROM_EMAIL (a verified sender on your domain).
//
// Swap the "sendEmail" call for your provider of choice if you don't use
// Resend — see §8.2 of the build brief for alternatives.

interface FormPayload {
  [key: string]: string | string[];
}

const REQUIRED_FIELDS = [
  'typ_instituce',
  'nazev_organizace',
  'kraj',
  'pocet_zamestnancu',
  'jmeno',
  'email',
];

const MIN_SUBMIT_MS = 3000; // reject submissions faster than a human can plausibly fill the form

export default async (request: Request): Promise<Response> => {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method-not-allowed' }, 405);
  }

  let form: URLSearchParams | FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'invalid-body' }, 400);
  }

  const payload = collect(form);

  // Honeypot: a real visitor never sees or fills this field.
  if (payload.company_website) {
    return json({ ok: true }, 200); // pretend success, drop silently
  }

  // Time-to-submit check (only enforced when the JS-enhanced client sent it).
  const renderedAt = Number(payload.form_rendered_at);
  if (renderedAt && Date.now() - renderedAt < MIN_SUBMIT_MS) {
    return json({ ok: false, error: 'too-fast' }, 400);
  }

  const missing = REQUIRED_FIELDS.filter((f) => !payload[f]);
  if (missing.length > 0) {
    return json({ ok: false, error: 'missing-fields', fields: missing }, 422);
  }

  if (!isValidEmail(String(payload.email))) {
    return json({ ok: false, error: 'invalid-email' }, 422);
  }

  const notifyEmail = process.env.NOTIFY_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FORM_FROM_EMAIL;

  if (!notifyEmail || !apiKey || !fromEmail) {
    console.error('poptavka: missing NOTIFY_EMAIL / RESEND_API_KEY / FORM_FROM_EMAIL env vars');
    return json({ ok: false, error: 'server-not-configured' }, 500);
  }

  try {
    await sendEmail({
      apiKey,
      from: fromEmail,
      to: notifyEmail,
      replyTo: String(payload.email),
      subject: `Nová poptávka: ${payload.nazev_organizace}`,
      text: renderNotificationText(payload),
    });

    await sendEmail({
      apiKey,
      from: fromEmail,
      to: String(payload.email),
      subject: 'Poptávka přijata',
      text: `Dobrý den,\n\nděkujeme za poptávku. Ozveme se vám co nejdříve.\n\nS pozdravem`,
    });
  } catch (err) {
    console.error('poptavka: failed to send email', err);
    return json({ ok: false, error: 'send-failed' }, 502);
  }

  return json({ ok: true }, 200);
};

function collect(form: FormData): FormPayload {
  const out: FormPayload = {};
  for (const [key, value] of form.entries()) {
    if (key in out) {
      const existing = out[key];
      out[key] = Array.isArray(existing) ? [...existing, String(value)] : [String(existing), String(value)];
    } else {
      out[key] = String(value);
    }
  }
  return out;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function renderNotificationText(payload: FormPayload): string {
  return Object.entries(payload)
    .filter(([key]) => key !== 'company_website' && key !== 'form_rendered_at')
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
    .join('\n');
}

async function sendEmail(opts: {
  apiKey: string;
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
}): Promise<void> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${opts.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: opts.from,
      to: [opts.to],
      reply_to: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
    }),
  });

  if (!res.ok) {
    throw new Error(`resend-error-${res.status}`);
  }
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
