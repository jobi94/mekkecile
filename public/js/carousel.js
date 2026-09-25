// Progressive enhancement for the "Programy" carousel.
// Baseline (no JS): native horizontal scroll-snap + anchor-link dots already
// work — clicking a dot jumps the browser's native scrollIntoView to that
// card. This script only adds arrow buttons, active-dot sync and a counter.

document.querySelectorAll('.carousel-track').forEach((track) => {
  const section = track.closest('section');
  const prevBtn = section?.querySelector('.carousel-prev');
  const nextBtn = section?.querySelector('.carousel-next');
  const statusEl = section?.querySelector('.carousel-status');
  const dots = Array.from(section?.querySelectorAll('.carousel-dot') ?? []);
  const cards = Array.from(track.querySelectorAll('.carousel-card'));
  if (cards.length === 0) return;

  section?.querySelector('.carousel-controls')?.classList.remove('hidden');
  section?.querySelector('.carousel-controls')?.classList.add('flex');

  function step() {
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '24');
    return cards[0].getBoundingClientRect().width + gap;
  }

  function scrollByCards(direction) {
    track.scrollBy({ left: step() * direction, behavior: 'smooth' });
  }

  prevBtn?.addEventListener('click', () => scrollByCards(-1));
  nextBtn?.addEventListener('click', () => scrollByCards(1));

  function updateEnds() {
    const max = track.scrollWidth - track.clientWidth - 1;
    if (prevBtn) prevBtn.disabled = track.scrollLeft <= 0;
    if (nextBtn) nextBtn.disabled = track.scrollLeft >= max;
  }

  // Deterministic index from scroll position (rather than IntersectionObserver
  // firing order, which is unreliable when several cards are visible at once).
  // The browser clamps scrollLeft once the last card can no longer align to
  // the viewport's start edge, so the two ends are special-cased rather than
  // derived from a uniform division.
  function updateCurrent() {
    const max = track.scrollWidth - track.clientWidth;
    let index;
    if (track.scrollLeft <= 0) index = 0;
    else if (track.scrollLeft >= max - 1) index = cards.length - 1;
    else index = Math.min(cards.length - 1, Math.max(0, Math.round(track.scrollLeft / step())));
    if (statusEl) statusEl.textContent = `${index + 1} / ${cards.length}`;
    dots.forEach((dot, i) => {
      if (i === index) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }

  let ticking = false;
  track.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateEnds();
        updateCurrent();
        ticking = false;
      });
    },
    { passive: true }
  );
  updateEnds();
  updateCurrent();

  // Dots already work as plain anchor links without this — just stop the
  // default jump-to-top-of-page vertical scroll some browsers add and let
  // scrollIntoView handle horizontal position smoothly instead.
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const id = dot.dataset.target;
      const target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      history.replaceState(null, '', `#${id}`);
    });
  });
});
