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
    // Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Play Video Button
    const playButton = document.getElementById('play-video');
    const video = document.getElementById('video-element'); 

    if (playButton && video) {
        playButton.addEventListener('click', () => {
            video.play();
        });
    }
});
// Define the stats data
const statsData = [
  { id: 'match-success-rate', value: 95, suffix: '%' },
  { id: 'clients-attended', value: 15000, suffix: '+' },
  { id: 'verified-reviews', value: 30000, suffix: '+' },
  { id: 'satisfaction-guaranteed', value: 100, suffix: '%' }
];

// Animate the counters
const animationDuration = 3600; // 3.6 seconds for a better visual effect
function animateCounter(element, targetValue, stat) {
  let currentValue = 0;
  const increment = Math.ceil(targetValue / animationDuration * 10);
  const interval = setInterval(() => {
    currentValue += increment;
    element.textContent = `${currentValue.toLocaleString()}${stat.suffix}`;
    if (currentValue >= targetValue) {
      clearInterval(interval);
      element.textContent = `${targetValue.toLocaleString()}${stat.suffix}`;
    }
  }, 10);
}

// Animate each stat
statsData.forEach(stat => {
  const element = document.getElementById(stat.id);
  if (element) {
    animateCounter(element, stat.value, stat);
  }
});
