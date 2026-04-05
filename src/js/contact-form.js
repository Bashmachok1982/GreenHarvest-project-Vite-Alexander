import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.contact-form');
const inputs = form.querySelectorAll('.contact-input');
const btn = form.querySelector('.contact-btn');

// ── Валидация email ──────────────────────────────────────
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Установка состояния ошибки ───────────────────────────
function setError(input) {
  input.classList.remove('contact-input--success');
  input.classList.add('contact-input--error');
}

// ── Установка состояния успеха ───────────────────────────
function setSuccess(input) {
  input.classList.remove('contact-input--error');
  input.classList.add('contact-input--success');
}

// ── Сброс состояния поля ─────────────────────────────────
function clearState(input) {
  input.classList.remove('contact-input--error', 'contact-input--success');
}

// ── Валидация одного поля ────────────────────────────────
// name    — минимум 2 символа
// email   — корректный формат
// comment — минимум 10 символов
function validateField(input) {
  const value = input.value.trim();

  if (!value) {
    setError(input);
    return false;
  }

  if (input.name === 'name' && value.length < 2) {
    setError(input);
    return false;
  }

  if (input.type === 'email' && !isValidEmail(value)) {
    setError(input);
    return false;
  }

  if (input.name === 'comment' && value.length < 10) {
    setError(input);
    return false;
  }

  setSuccess(input);
  return true;
}

// ── Проверка всей формы — управляет классом кнопки ───────
// Кнопка визуально неактивна пока все поля не валидны
function checkFormValidity() {
  const allValid = [...inputs].every(input => {
    const value = input.value.trim();
    if (!value) return false;
    if (input.name === 'name') return value.length >= 2;
    if (input.type === 'email') return isValidEmail(value);
    if (input.name === 'comment') return value.length >= 10;
    return true;
  });

  // Управляем только классом — не disabled атрибутом
  btn.classList.toggle('contact-btn--disabled', !allValid);
}

// ── Live валидация при вводе и уходе с поля ──────────────
inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim()) {
      validateField(input);
    } else {
      clearState(input);
    }
    checkFormValidity();
  });

  input.addEventListener('blur', () => {
    validateField(input);
    checkFormValidity();
  });
});

// ── Отправка формы ───────────────────────────────────────
form.addEventListener('submit', e => {
  e.preventDefault();

  // Если кнопка неактивна — показываем ошибку и выходим
  if (btn.classList.contains('contact-btn--disabled')) {
    iziToast.error({
      title: 'Error',
      message: 'Please fill in all fields correctly.',
      position: 'topRight',
      timeout: 4000,
      backgroundColor: '#e74a3b',
      titleColor: '#fbfbfb',
      messageColor: '#fbfbfb',
      iconColor: '#fbfbfb',
    });
    return;
  }

  // Финальная проверка всех полей
  const allValid = [...inputs].every(input => validateField(input));

  if (!allValid) {
    iziToast.error({
      title: 'Error',
      message: 'Please fill in all fields correctly.',
      position: 'topRight',
      timeout: 4000,
      backgroundColor: '#e74a3b',
      titleColor: '#fbfbfb',
      messageColor: '#fbfbfb',
      iconColor: '#fbfbfb',
    });
    return;
  }

  // Успешная отправка
  iziToast.success({
    title: 'Success',
    message: 'Your message has been sent! We will contact you soon.',
    position: 'topRight',
    timeout: 5000,
    backgroundColor: '#3cbc81',
    titleColor: '#fbfbfb',
    messageColor: '#fbfbfb',
    iconColor: '#fbfbfb',
  });

  // Сброс формы, состояний и возврат кнопки в неактивный вид
  form.reset();
  inputs.forEach(clearState);
  btn.classList.add('contact-btn--disabled');
});
