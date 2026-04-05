import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

window.addEventListener('load', () => {
  const base = import.meta.env.BASE_URL;
  const width = window.innerWidth;

  // Подменяем href с учётом base URL и ширины экрана
  document.querySelectorAll('.glightbox').forEach(link => {
    let href;

    if (width < 768) {
      href = link.dataset.mobileHref;
    } else if (width < 1280) {
      href = link.dataset.tabletHref;
    } else {
      href = link.getAttribute('href');
    }

    // Добавляем base и убираем leading slash
    link.setAttribute('href', base + href.replace(/^\//, ''));
  });

  // Инициализируем после подмены href
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
