const list = document.querySelector('.reviews-list');
const dots = document.querySelectorAll('.reviews-dot');
const items = document.querySelectorAll('.reviews-item');

if (list && dots.length && items.length) {
  // ── Обновление активной точки при скролле ───────────────
  list.addEventListener('scroll', () => {
    const itemWidth = items[0].offsetWidth + 16; // ширина карточки + gap
    const scrollLeft = list.scrollLeft;
    const maxScroll = list.scrollWidth - list.clientWidth;

    let index;

    // Если доскроллили до конца — активируем последнюю точку
    if (scrollLeft >= maxScroll - 5) {
      index = dots.length - 1;
    } else {
      index = Math.round(scrollLeft / itemWidth);
    }

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });
  });

  // ── Скролл к карточке при клике на точку ────────────────
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const itemWidth = items[0].offsetWidth + 16;
      list.scrollTo({
        left: i * itemWidth,
        behavior: 'smooth',
      });
    });
  });
}
