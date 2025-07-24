const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
window.onscroll = () => {
    navLinks.Links.classList.remove('active');
}

// Typing Text Animation

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UX/UI Designer', 'Graphic Designer','Backend Developer'],
    typeSpeed: 60,
    backspeed: 60,
    backDelay: 1000,
    loop: true,
  });