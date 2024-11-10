document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate__fadeInUp');
            }
        });
    };

    // Check if element is in viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);

    // Initial check for elements in viewport
    animateOnScroll();
});