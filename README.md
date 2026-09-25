# Školení ochrany měkkých cílů — web

Astro (static output) + Tailwind CSS v4. One-page marketing site for a Czech soft-target
security-training provider, built from the project brief. See `AGENTS.md` / `CLAUDE.md` for
Astro-specific dev notes.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`        | Start local dev server at `localhost:4321`     |
| `npm run build`       | Build production site to `./dist/`             |
| `npm run preview`      | Preview the production build locally           |

## Before launch — placeholders to fill

Everything the company needs to supply lives in **`src/site.config.ts`** as `{{TOKEN}}` strings.
Replace each one, then grep the repo for `{{` to make sure none were missed:

```sh
grep -rn '{{' src public netlify --include='*.ts' --include='*.astro' --include='*.json' --include='*.txt'
```

Key items:

- **Identity & contact**: `companyName`, `legalName`, `ico`, `dic`, address fields, `phone`,
  `email`, `domain`, `regionsServed`, `responseTimeDays`.
- **`astro.config.mjs`**: update `PRODUCTION_DOMAIN` to match `site.config.ts`'s `domain`, and
  update the `Sitemap:` line in `public/robots.txt` to the same host.
- **Brand assets**: `logoSvg` and `ogImage` currently point at generated placeholders
  (`/favicon.svg`, `/og.png`) — swap in real brand artwork (`{{LOGO_SVG}}`, 1200×630 `{{OG_IMAGE}}`).
- **Trust/compliance flags** (`site.qualifications`, `accreditationDvpp`,
  `policeCooperationVerified`, `opJakEligible`): every flag defaults to `false`/empty. Only flip
  one to `true` once the company can actually document it — the "Soulad s MŠMT" section and the
  FAQ read straight from these flags, and this is the page's strongest trust signal, so it must
  stay accurate.
- **`lecturers` / `testimonials`** (`src/data/lektori.ts`, `src/data/reference.ts`): empty
  arrays. The corresponding sections hide themselves automatically until real, permitted content
  is added — never fill these with placeholder people or quotes.
- **Legal pages** (`src/pages/zasady-ochrany-osobnich-udaju.astro`,
  `obchodni-podminky.astro`, `prohlaseni-o-pristupnosti.astro`): drafted, marked in-page as
  requiring legal review before publishing.

## Form backend

The inquiry form (`src/components/Poptavka.astro`) posts to a Netlify Function
(`netlify/functions/poptavka.ts`) using Resend for email delivery. Set these environment
variables in your Netlify site settings:

- `RESEND_API_KEY`
- `FORM_FROM_EMAIL` — a sender verified on your domain in Resend
- `NOTIFY_EMAIL` — where inquiries land (typically the same as `site.config.ts`'s `email`)

The form fully degrades without JavaScript (all three steps render as one page and submit
natively); `public/js/poptavka.js` progressively enhances it into a 3-step wizard. If you're not
deploying to Netlify, swap the `action` in `site.config.ts` (`formEndpoint`) and reimplement the
handler per §8.2 of the brief (Vercel/Cloudflare function, or a hosted form service).

## Analytics

No analytics are wired up by default (cookieless, so no consent banner is needed). If you add
one, prefer a cookieless provider (Plausible/Umami/self-hosted Matomo). If you must use GA4, add
a proper consent banner with Consent Mode v2 first — see `src/pages/cookies.astro`.

## Off-page checklist (not code — do these once live)

- Google Search Console + submit `sitemap-index.xml`
- **Seznam Webmaster** + **Firmy.cz** listing (Seznam is a meaningful share of Czech search)
- Bing Webmaster Tools
- Google Business Profile, if there's a public-facing address
- Keep NAP (name/address/phone) identical everywhere it's listed

## QA already run on this build

- `npm run build` — clean, static output
- axe-core (Puppeteer) full-page scan — 0 violations
- Keyboard tab-order check — skip link → header nav → content, no traps
- No-JS structural check — all three form steps render/submit as one page without the enhancement script
- FAQ visible text vs. `FAQPage` JSON-LD — byte-identical
