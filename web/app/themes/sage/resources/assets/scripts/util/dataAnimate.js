import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
};

const animateFrom = (elem, direction, duration, delay) => {
    direction = direction || 1;
    duration = duration || 1.25;
    delay = delay || 0;
    let x = 0;
    let y = direction * 100;
    if (elem.dataset.animate === 'fade-to-top') {
        x = 0;
        y = 100;
    }
    if (elem.dataset.animate === 'fade-to-right') {
        x = -100;
        y = 0;
    }
    if (elem.dataset.animate === 'fade-to-bottom') {
        x = 0;
        y = -100;
    }
    if (elem.dataset.animate === 'fade-to-left') {
        x = 100;
        y = 0;
    }
    if (elem.dataset.animate === 'fade-in') {
        x = 0;
        y = 0;
    }
    gsap.fromTo(
        elem,
        { x, y, autoAlpha: 0 },
        {
            duration,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: 'expo',
            overwrite: 'auto',
            delay,
        }
    );
};

const dataAnimate = () => {
    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    if (!elementsToAnimate.length > 0) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    Array.from(elementsToAnimate).forEach((elem) => {
        if (elem.dataset.animate === 'parallax') {
            gsap.to(elem, {
                yPercent: -50,
                scrollTrigger: {
                    trigger: elem,
                    scrub: true,
                },
                ease: 'none',
            });
        } else {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                onEnter() {
                    animateFrom(
                        elem,
                        1,
                        elem.dataset.animateDuration,
                        elem.dataset.animateDelay
                    );
                },
                onLeaveBack: (self) => self.disable(),
            });
        }
    });
};

export { dataAnimate as default };
