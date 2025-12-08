const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
