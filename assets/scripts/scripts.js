document.addEventListener('DOMContentLoaded', () => {

    const textWidth = document.querySelector('.running-line__item').scrollWidth,
        duration = textWidth / 50,
        tl = gsap.timeline({ repeat: -1 });

    tl.to('.running-line__item', {
        x: -textWidth,
        duration: duration,
        ease: "none",
        repeat: -1,
    });

});