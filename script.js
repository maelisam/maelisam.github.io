const iconchange = document.getElementById('iconchange');
const bars = document.querySelector('.bars');
const xmark = document.querySelector('.xmark');
const navbar = document.getElementById('navbar');
const navlogo = document.querySelector('.navlogo');
const landingImage = document.querySelector('.landing-image');
const link1 = document.querySelector('.link-image-1');
const link2 = document.querySelector('.link-image-2');
const link3 = document.querySelector('.link-image-3');
const pageLinks = document.querySelector('.page-links-container');

link1.addEventListener('mouseover', showImage1);
link2.addEventListener('mouseover', showImage2);
link3.addEventListener('mouseover', showImage3);
pageLinks.addEventListener('mouseleave', showLandingImage);

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

function showImage1() {
  landingImage.style.backgroundImage = "url('IMG/perhe-kuvaus.jpg')";
  landingImage.style.transition = 'all 400ms';
}

function showImage2() {
  landingImage.style.backgroundImage = "url('IMG/muoto-kuvaus.jpg')";
  landingImage.style.transition = 'all 400ms';
}

function showImage3() {
  landingImage.style.backgroundImage = "url('IMG/perhe-kuvaus.jpg')";
  landingImage.style.transition = 'all 400ms';
}

function showLandingImage() {
  landingImage.style.backgroundImage = "url('IMG/odotus-kuvaus.jpg')";
  landingImage.style.transition = 'all 600ms';
}

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
