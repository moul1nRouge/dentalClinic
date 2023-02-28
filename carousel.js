const interval = 10000;

const handleImageChange = (offset) =>{

  const activeSlide = document.querySelector('[data-active]');

  const slides = [...document.querySelectorAll('.slide')];

  const currentIndex = slides.indexOf(activeSlide);

  let newIndex = currentIndex + offset;

  if(newIndex < 0) newIndex = slides.length - 1
  if(newIndex >= slides.length) newIndex = 0

  slides[newIndex].dataset.active = true;
  delete activeSlide.dataset.active

}


const onNext = () => handleImageChange(1)

const onPrev = () => handleImageChange(-1)

// Функція, що автоматично перемикає зображення
const autoChange = () => {
  handleImageChange(1);
}

// Запускаємо автоматичне перемикання через інтервал
const startAutoChange = () => {
  setInterval(autoChange, interval);
}

// Зупиняємо автоматичне перемикання
const stopAutoChange = () => {
  clearInterval(intervalId);
}

// Запускаємо автоматичне перемикання при завантаженні сторінки
startAutoChange();