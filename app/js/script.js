const header = document.querySelector('.header');

header.addEventListener('click', toggleMenu);

function toggleMenu() {
  header.classList.toggle('open');
}
