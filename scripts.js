// Инициализация AOS для анимации элементов при прокрутке
AOS.init({
    duration: 1000,
    once: true,
});

// GSAP анимация
document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".intro h2", { 
        opacity: 0, 
        y: -50, 
        duration: 1, 
        delay: 0.5 
    });

    gsap.from(".cta", { 
        opacity: 0, 
        scale: 0.8, 
        duration: 1, 
        delay: 1, 
        ease: "elastic.out(1, 0.75)" 
    });

    gsap.from(".service", { 
        opacity: 0, 
        y: 100, 
        stagger: 0.3, 
        duration: 1, 
        delay: 1.5
    });

    // Параллакс-эффект
    const parallaxImage = document.querySelector('.parallax-image');

    window.addEventListener('scroll', function() {
        const offset = window.scrollY;
        parallaxImage.style.backgroundPositionY = offset * 0.5 + 'px';
    });

    // Анимация робота
    const typingText = document.getElementById("typing-effect");
    const text = "console.log('Hello World!');";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});
