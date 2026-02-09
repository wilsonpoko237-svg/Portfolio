document.addEventListener('DOMContentLoaded', () => {
  // Modal (contact) and detail toggles
  const modal = document.getElementById('modal-overlay');
  const openModalBtns = document.querySelectorAll('.js-open-modal');
  const closeModalBtns = document.querySelectorAll('.js-close-modal');

  function openModal(e) {
    if (e) e.preventDefault();
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    const focusEl = modal.querySelector('input, textarea, button');
    if (focusEl) focusEl.focus();
  }

  function closeModal(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(b => b.addEventListener('click', openModal));
  closeModalBtns.forEach(b => b.addEventListener('click', closeModal));

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(e);
    });
  }

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) closeModal();
  });

  // Toggle project/experience details
  document.querySelectorAll('.js-toggle-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      const selector = btn.dataset.target;
      if (!selector) return;
      const target = document.querySelector(selector);
      if (!target) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      target.classList.toggle('hidden');
    });
  });

  // Make elements glow briefly after hover (persist glow for a short time)
  (function setupHoverGlow() {
    const HOVER_PERSIST_MS = 600;
    const items = document.querySelectorAll('.neon-glow-hover, .neon-border, .glass, .material-symbols-outlined, .neon-text');
    const timeouts = new WeakMap();

    items.forEach(el => {
      el.addEventListener('mouseenter', () => {
        // cancel pending removal
        const t = timeouts.get(el);
        if (t) { clearTimeout(t); timeouts.delete(el); }
        el.classList.add('glow');
      });
      el.addEventListener('mouseleave', () => {
        // keep glow for a short time after mouse leaves
        const timeout = setTimeout(() => {
          el.classList.remove('glow');
          timeouts.delete(el);
        }, HOVER_PERSIST_MS);
        timeouts.set(el, timeout);
      });
    });
  })();

});