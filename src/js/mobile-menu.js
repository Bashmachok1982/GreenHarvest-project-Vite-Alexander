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

// Открытие по бургеру
burgerBtn.addEventListener('click', openMenu);

// Закрытие по бекдропу
backdrop.addEventListener('click', closeMenu);

// Закрытие по крестику
document.addEventListener('click', e => {
  if (e.target.closest('#mobile-menu-close')) closeMenu();
});

// Закрытие по Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

// Закрытие при клике на навигационные ссылки
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Кнопка Shop Now — закрываем меню и скролим к форме
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    closeMenu();
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  });
}
