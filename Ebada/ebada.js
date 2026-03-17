document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');
    const myCarousel = document.querySelector('#testimonialCarousel');
    const contactForm = document.querySelector('form');
    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            nav.classList.add('shadow-lg', 'bg-opacity-75');
        } else {
            nav.classList.remove('shadow-lg', 'bg-opacity-75');
        }
    });

    smoothLinks.forEach(anchor => {
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

    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 5000,
            wrap: true,
            pause: 'hover',
            ride: 'carousel'
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('شكراً لتواصلك معنا! سيتم الاتصال بك من فريق آية ستار لمكافحة الحشرات فوراً لتحديد موعد المعاينة.');
            this.reset();
        });
    }
});