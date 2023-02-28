const images = document.querySelectorAll('.slide img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

images.forEach(image => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    modal.style.display = 'block';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});