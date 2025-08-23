// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }
    });
}, observerOptions);

const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
    observer.observe(aboutSection);
}

// Dynamic circular text content
const circularTexts = [
    "SALESFORCE DEVELOPER • AI ENTHUSIAST • FULL STACK • ",
    "TRAILBLAZER • INNOVATOR • PROBLEM SOLVER • ",
    "PYTHON DEVELOPER • MACHINE LEARNING • WEB APPS • "
];

let currentTextIndex = 0;
const textPath = document.querySelector('.circular-text');

function changeCircularText() {
    if (textPath) {
        textPath.textContent = circularTexts[currentTextIndex];
        currentTextIndex = (currentTextIndex + 1) % circularTexts.length;
    }
}

// Change text every 10 seconds
setInterval(changeCircularText, 10000);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
