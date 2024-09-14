// Animate skill circles on scroll
function animateSkills() {
    const skillSection = document.querySelector('#skills');
    const skillCircles = document.querySelectorAll('.circle');

    const animateCircle = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillCircles.forEach(circle => {
                    const percent = circle.parentNode.getAttribute('stroke-dasharray').split(',')[0];
                    circle.style.strokeDasharray = `${percent}, 100`;
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const skillsObserver = new IntersectionObserver(animateCircle, {
        threshold: 0.5
    });

    skillsObserver.observe(skillSection);
}

// Smooth scrolling for navigation links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Parallax effect for the welcome section
function parallaxEffect() {
    const welcomeSection = document.querySelector('.welcome-box');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        welcomeSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
}

// Typewriter effect for about me section
function typewriterEffect() {
    const typewriterElement = document.querySelector('.typewriter');
    const text = typewriterElement.innerHTML;
    const speed = 50; // Adjust speed as needed
    let i = 0;

    typewriterElement.innerHTML = '';

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

// Animate on scroll initialization
function initAOS() {
    AOS.init({
        duration: 1000,
        once: true
    });
}

// Glitch effect for the main title
function glitchEffect() {
    const glitchElement = document.querySelector('.glitch');
    setInterval(() => {
        glitchElement.style.animation = 'none';
        void glitchElement.offsetWidth; // Trigger reflow
        glitchElement.style.animation = null;
    }, 5000);
}

// Initialize particle background
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
    });
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = `${percent}%`;
    });
}

// Initialize all functions
function init() {
    smoothScroll();
    animateSkills();
    parallaxEffect();
    typewriterEffect();
    initAOS();
    glitchEffect();
    initParticles();
    animateProgressBars();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
      
