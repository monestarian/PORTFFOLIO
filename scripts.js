// Smooth Scroll, Dynamic Header Offset, and Auto-Close Menu
const header = document.querySelector('header');
const navLinksContainer = document.querySelector('.nav-links');

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // 1. Automatically close the mobile menu when a link is clicked
        /*if (navLinksContainer.classList.contains('show')) {
            navLinksContainer.classList.remove('show');
        }*/

        // 2. Find the section we want to scroll to
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // 3. Dynamically measure the header's exact height in pixels
        const headerHeight = header.offsetHeight;

        // 4. Calculate the perfect scroll position (Target position MINUS Header height)
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY /*- headerHeight*/;
        
        // 5. Scroll smoothly to that exact spot
        window.scrollTo({
            top: targetPosition,
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

