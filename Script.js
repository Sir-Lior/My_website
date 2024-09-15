 document.addEventListener('DOMContentLoaded', () => {
    // Toggle Navigation Menu for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    } else {
        console.error('Navigation toggle or menu not found');
    }

    // Sticky Header
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Dynamic Auth Links (Sample Logic)
    const userLoggedIn = false; // Replace with your authentication logic

    const loginLink = document.querySelector('.auth-links .login');
    const signupLink = document.querySelector('.auth-links .signup');

    if (loginLink && signupLink) {
        if (userLoggedIn) {
            loginLink.style.display = 'none';
            signupLink.textContent = 'Profile';
            signupLink.href = '/profile'; // Link to user profile or dashboard
        } else {
            loginLink.style.display = 'inline-block';
            signupLink.textContent = 'Sign Up';
            signupLink.href = '/signup'; // Link to sign up page
        }
    } else {
        console.error('Auth links not found');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
        const playButton = document.getElementById('play-video');
        const video = document.getElementById('intro-video');

        playButton.addEventListener('click', function() {
            // Play the video
            video.play();
        });
    });
