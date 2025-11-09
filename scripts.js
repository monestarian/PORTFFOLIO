// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight Active Section in Navbar on Scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll("section");
    let scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
        if (scrollPos > sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(sec.id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Optional: Toggle Mobile Menu (if you add hamburger later)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Background Slideshow
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function changeSlide() {
    slides[currentSlide].classList.remove("active"); // Hide current slide
    currentSlide = (currentSlide + 1) % slides.length; // Move to next slide
    slides[currentSlide].classList.add("active"); // Show next slide
}
// Change slide every 4 seconds
setInterval(changeSlide, 4000);


const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

