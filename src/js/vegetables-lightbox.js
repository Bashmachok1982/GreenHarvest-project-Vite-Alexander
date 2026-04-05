import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

window.addEventListener('load', () => {
  const width = window.innerWidth;

  // Сначала подменяем href
  document.querySelectorAll('.glightbox').forEach(link => {
    if (width < 768) {
      link.setAttribute('href', link.dataset.mobileHref);
    } else if (width < 1280) {
      link.setAttribute('href', link.dataset.tabletHref);
    }
    // десктоп ≥ 1280 — href уже правильный
  });

  // Потом инициализируем — он читает уже обновлённые href
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true,
    draggable: true,
    openEffect: 'fade',
    closeEffect: 'fade',
    slideEffect: 'slide',
  });
});
