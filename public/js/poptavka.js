// Progressive enhancement for the inquiry form.
// The form fully works with this script absent: all three fieldsets stay
// visible, native HTML5 validation applies, and the browser posts the form
// directly to `action` (see Poptavka.astro / netlify/functions/poptavka.ts).

const form = document.getElementById('poptavka-form');
if (form) {
  enhanceStepper(form);
  wirePrefill(form);
  wireSubmit(form);
}

function enhanceStepper(form) {
  const steps = Array.from(form.querySelectorAll('.form-step'));
  if (steps.length < 2) return;

  const progress = document.getElementById('form-progress');
  const progressLabel = document.getElementById('form-progress-label');
  const progressBar = document.getElementById('form-progress-bar');
  const total = steps.length;
  let current = 1;

  progress?.classList.remove('hidden');
  progress?.classList.add('flex');

  // Fraction of the *current* step that's already filled in, so the bar
  // visibly grows as fields are completed — not just when a step changes.
  function stepFillFraction(stepEl) {
    const required = Array.from(stepEl.querySelectorAll('[required]'));
    if (required.length === 0) return 1;
    const filled = required.filter((field) => field.checkValidity()).length;
    return filled / required.length;
  }

  function updateProgress() {
    if (!progressBar) return;
    const stepEl = steps[current - 1];
    const overall = ((current - 1) + stepFillFraction(stepEl)) / total;
    progressBar.style.width = `${overall * 100}%`;
  }

  function show(stepNumber, { moveFocus = false } = {}) {
    steps.forEach((el) => {
      const n = Number(el.dataset.step);
      el.classList.toggle('hidden', n !== stepNumber);
    });
    current = stepNumber;
    if (progressLabel) progressLabel.textContent = `Krok ${stepNumber} ze ${total}`;
    updateProgress();
    if (moveFocus) {
      const heading = steps[stepNumber - 1].querySelector('legend');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus();
    }
  }

  form.querySelectorAll('.step-next').forEach((btn) => {
    btn.addEventListener('click', () => {
      const stepEl = btn.closest('.form-step');
      if (!validateStep(stepEl)) return;
      show(Number(btn.dataset.goto), { moveFocus: true });
    });
  });

  form.querySelectorAll('.step-back').forEach((btn) => {
    btn.addEventListener('click', () => show(Number(btn.dataset.goto), { moveFocus: true }));
  });

  form.addEventListener('input', updateProgress);
  form.addEventListener('change', updateProgress);

  show(1); // initial state on page load — no focus theft
}

function validateStep(stepEl) {
  const invalid = [];
  stepEl.querySelectorAll('[required]').forEach((field) => {
    if (!field.checkValidity()) invalid.push(field);
  });

  const summary = document.getElementById('form-error-summary');
  const list = document.getElementById('form-error-list');
  if (invalid.length === 0) {
    summary?.classList.add('hidden');
    return true;
  }

  if (summary && list) {
    list.innerHTML = '';
    invalid.forEach((field) => {
      const li = document.createElement('li');
      const label = stepEl.querySelector(`label[for="${field.id}"]`);
      li.textContent = label ? label.textContent.replace('*', '').trim() : 'Vyplňte prosím toto pole.';
      list.appendChild(li);
      field.setAttribute('aria-invalid', 'true');
    });
    summary.classList.remove('hidden');
    summary.focus();
  }
  invalid[0]?.focus();
  return false;
}

function wirePrefill(form) {
  const banner = document.getElementById('program-selected-banner');
  const nameEl = document.getElementById('program-selected-name');
  const hiddenField = document.getElementById('vybrany_program_nazev');
  const clearBtn = document.getElementById('program-selected-clear');
  let lastCheckbox = null;

  function showSelection(id, name) {
    const label = name || id;
    const checkbox = form.querySelector(`.program-checkbox[value="${id}"]`);
    if (checkbox) {
      checkbox.checked = true;
      lastCheckbox = checkbox;
    }
    if (hiddenField) hiddenField.value = label;
    if (nameEl) nameEl.textContent = label;
    if (banner) {
      banner.classList.remove('hidden');
      banner.classList.add('flex');
    }
  }

  document.querySelectorAll('.poptat-link').forEach((link) => {
    link.addEventListener('click', () => {
      const id = link.dataset.program;
      if (!id) return;
      showSelection(id, link.dataset.programName);
    });
  });

  clearBtn?.addEventListener('click', () => {
    if (hiddenField) hiddenField.value = '';
    if (nameEl) nameEl.textContent = '';
    if (lastCheckbox) {
      lastCheckbox.checked = false;
      lastCheckbox = null;
    }
    banner?.classList.add('hidden');
    banner?.classList.remove('flex');
  });
}

function wireSubmit(form) {
  const rendered = document.getElementById('form_rendered_at');
  if (rendered) rendered.value = String(Date.now());

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const lastStep = form.querySelector('.form-step:last-of-type');
    if (lastStep && !validateStep(lastStep)) return;

    const successEl = document.getElementById('form-success');
    const failEl = document.getElementById('form-fail');
    successEl?.classList.add('hidden');
    failEl?.classList.add('hidden');

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn?.setAttribute('disabled', 'true');

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (!res.ok) throw new Error('request-failed');

      form.hidden = true;
      if (successEl) {
        successEl.textContent = `Poptávka odeslána. Ozveme se vám do ${form.dataset.responseDays || 'několika'} pracovních dnů.`;
        successEl.classList.remove('hidden');
      }
    } catch (err) {
      submitBtn?.removeAttribute('disabled');
      if (failEl) {
        failEl.textContent = 'Poptávku se nepodařilo odeslat. Zkuste to znovu nebo nám zavolejte.';
        failEl.classList.remove('hidden');
        failEl.focus?.();
      }
    }
  });
}
