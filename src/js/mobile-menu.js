const burgerBtn = document.getElementById('burger-menu-button');
const menu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('mobile-menu-backdrop');

function openMenu() {
  menu.classList.add('is-open');
  burgerBtn.style.visibility = 'hidden';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('is-open');
  burgerBtn.style.visibility = 'visible';
  document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', openMenu);
backdrop.addEventListener('click', closeMenu);

// Делегирование — ловим клик на крестике через document
document.addEventListener('click', e => {
  if (e.target.closest('#mobile-menu-close')) closeMenu();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});
