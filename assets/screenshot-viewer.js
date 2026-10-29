(() => {
  'use strict';
  const viewer = document.getElementById('screenshot-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  const image = document.getElementById('screenshot-image');
  const title = document.getElementById('screenshot-title');
  const close = document.getElementById('screenshot-close');
  let opener = null;
  let pointerStartedOutside = false;
  const outsideImage = event => {
    const rect = image.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom;
  };
  document.querySelectorAll('a[data-screenshot]').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', viewer.id);
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      opener = link;
      title.textContent = link.dataset.screenshot + ' — ' + (link.dataset.platform || 'Mac') + ' version';
      image.alt = link.querySelector('img').alt;
      image.width = Number(link.dataset.width);
      image.height = Number(link.dataset.height);
      image.src = link.href;
      viewer.showModal();
      event.preventDefault();
      document.documentElement.classList.add('screenshot-open');
      close.focus();
    });
  });
  close.addEventListener('click', () => viewer.close());
  viewer.addEventListener('keydown', event => {
    if (event.key === 'Tab') { event.preventDefault(); close.focus(); }
  });
  viewer.addEventListener('pointerdown', event => {
    pointerStartedOutside = outsideImage(event);
  });
  viewer.addEventListener('click', event => {
    if (pointerStartedOutside && !event.target.closest('button') && outsideImage(event)) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.documentElement.classList.remove('screenshot-open');
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = null;
    pointerStartedOutside = false;
  });
})();
