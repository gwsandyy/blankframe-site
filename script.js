document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .hero-content');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar Blur Effect on Scroll
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(14, 14, 14, 0.95)';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(14, 14, 14, 0.85)';
            nav.style.boxShadow = 'none';
        }
    });
});