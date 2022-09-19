// Carousel
const nextBtn = document.querySelector('#carousel__btn');
nextBtn.addEventListener('click', function () {
  const currentElement = document.querySelector('.show');
  const items = document.querySelectorAll('.carousel__item');
  const idx = [...items].indexOf(currentElement);
  currentElement.classList.toggle('show');
  items[(idx + 1) % items.length].classList.toggle('show');
});