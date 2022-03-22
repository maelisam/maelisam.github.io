var iconchange = document.getElementById('iconchange');
var bars = document.querySelector('.bars');
var xmark = document.querySelector('.xmark');
var navbar = document.getElementById('navbar');
var navlogo = document.querySelector('.navlogo');

// Navbar

/*
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (iconchange.classList.contains('collapsed')) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    }
  }
}
*/

iconchange.addEventListener('click', hei);

function hei() {
  if (iconchange.classList.contains('collapsed')) {
    console.log('closed');
    xmark.style.display = 'none';
    bars.style.display = 'block';
    removeBackground();
  } else {
    console.log('open');
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    bars.style.display = 'none';
    xmark.style.display = 'block';
  }
}

function removeBackground() {
  setTimeout(function () {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }, 250);
}

const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener('click', () => {
    bsCollapse.toggle();
    hei();
  });
});
