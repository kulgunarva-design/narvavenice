(() => {
  const map = document.querySelector('.nv-photo-map');
  if (!map) return;
  const preview = map.querySelector('.nv-map-preview');
  const image = preview.querySelector('img');
  const caption = preview.querySelector('figcaption');
  const buttons = [...map.querySelectorAll('.nv-map-point')];
  let active = null, timer, restoringFocus = false;
  function restoreFocus(button) { restoringFocus = true; button.focus({preventScroll:true}); restoringFocus = false; }
  function close() {
    clearTimeout(timer);
    if (active) active.setAttribute('aria-expanded', 'false');
    active = null;
    preview.hidden = true;
  }
  function position() {
    if (!active) return;
    const area = map.getBoundingClientRect();
    const point = active.getBoundingClientRect();
    const width = preview.offsetWidth;
    const left = Math.max(0, Math.min(area.width - width, point.left - area.left - width - 16));
    preview.style.left = left + 'px';
    preview.style.top = Math.max(0, point.top - area.top - preview.offsetHeight / 2) + 'px';
  }
  function open(button) {
    clearTimeout(timer);
    if (active && active !== button) active.setAttribute('aria-expanded', 'false');
    active = button;
    image.src = button.dataset.photo;
    image.alt = button.getAttribute('aria-label');
    caption.textContent = image.alt;
    button.setAttribute('aria-expanded', 'true');
    preview.hidden = false;
    position();
  }
  function scheduleClose() { clearTimeout(timer); timer = setTimeout(close, 180); }
  buttons.forEach(button => {
    button.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') open(button); });
    button.addEventListener('pointerleave', scheduleClose);
    button.addEventListener('focus', () => { if (!restoringFocus && button.matches(':focus-visible')) open(button); });
    button.addEventListener('click', () => open(button));
  });
  preview.addEventListener('pointerenter', () => clearTimeout(timer));
  preview.addEventListener('pointerleave', scheduleClose);
  preview.querySelector('button').addEventListener('click', () => { const previous = active; close(); if (previous) restoreFocus(previous); });
  map.addEventListener('focusout', event => { if (!map.contains(event.relatedTarget)) close(); });
  document.addEventListener('pointerdown', event => { if (!map.contains(event.target)) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && active) { const previous = active; close(); restoreFocus(previous); } });
  image.addEventListener('load', position);
  window.addEventListener('resize', position);
})();
