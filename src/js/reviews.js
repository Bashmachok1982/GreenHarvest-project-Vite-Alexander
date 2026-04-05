const list = document.querySelector('.reviews-list');
const dots = document.querySelectorAll('.reviews-dot');

if (list && dots.length) {
  list.addEventListener('scroll', () => {
    const index = Math.round(list.scrollLeft / list.offsetWidth);
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      list.scrollTo({
        left: i * list.offsetWidth,
        behavior: 'smooth',
      });
    });
  });
}
