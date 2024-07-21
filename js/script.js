document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('mouseover', function() {
        navMenu.style.display = 'block';
    });

    navMenu.addEventListener('mouseleave', function() {
        navMenu.style.display = 'none';
    });
});
