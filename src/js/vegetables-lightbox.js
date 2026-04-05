import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

// Инициализация GLightbox для секции овощей
const lightbox = GLightbox({
  selector: '.glightbox', // селектор ссылок
  touchNavigation: true, // свайп на мобайле
  loop: true, // листаем по кругу
  autoplayVideos: false,
  openEffect: 'zoom', // эффект открытия
  closeEffect: 'fade', // эффект закрытия
  slideEffect: 'slide', // переход между слайдами
  closeButton: true,
  keyboardNavigation: true, // стрелки клавиатуры
  cssEfects: {
    zoom: { in: 'zoomIn', out: 'zoomOut' },
  },
});
