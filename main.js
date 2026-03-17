document.addEventListener('DOMContentLoaded', function () {
    // Navbar Scroll Logic
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('shadow-lg', 'bg-opacity-75');
        } else {
            nav.classList.remove('shadow-lg', 'bg-opacity-75');
        }
    });

    // Testimonial Slider Logic
    const reviewsCarousel = document.querySelector('#testimonialCarousel');
    if (reviewsCarousel) {
        const carouselInstance = new bootstrap.Carousel(reviewsCarousel, {
            interval: 4000,
            pause: 'hover',
            wrap: true,
            touch: true
        });

        reviewsCarousel.addEventListener('slide.bs.carousel', function () {
            const activeCard = reviewsCarousel.querySelector('.carousel-item.active .testimonial-card');
            if (activeCard) {
                activeCard.style.opacity = '0.7';
                activeCard.style.transition = '0.5s';
            }
        });

        reviewsCarousel.addEventListener('slid.bs.carousel', function () {
            const activeCard = reviewsCarousel.querySelector('.carousel-item.active .testimonial-card');
            if (activeCard) {
                activeCard.style.opacity = '1';
            }
        });
    }

    // Form Submission Logic
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكراً لتواصلك معنا! سيتم الاتصال بك من فريق آية ستار كلين فوراً.');
            contactForm.reset();
        });
    }

    // Smooth Scroll Optimization
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});