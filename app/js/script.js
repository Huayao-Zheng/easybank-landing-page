const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElms = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (header.classList.contains('open')) {
    // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElms.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    // Open Hamburger Menu'
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElms.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
}
