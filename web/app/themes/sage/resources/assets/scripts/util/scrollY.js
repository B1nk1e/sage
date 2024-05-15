/* eslint-disable */
window.requestAnimFrame = (function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
})();

/**
 *
 * @param {number} scrollTargetY the target scrollY property of the window
 * @param {number} speed time in pixels per second
 * @param {string} easing easing equation to use
 */

export default function scrollToY(scrollTargetY, speed, easing) {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    let currentTime = 0;

    scrollTargetY = scrollTargetY || 0;
    speed = speed || 2000;
    easing = easing || "easeOutSine";

    // min time 0.1, max time 0.8 seconds
    const time = Math.max(
        0.1,
        Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
    );

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    const easingEquations = {
        easeOutSine: (pos) => {
            return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: (pos) => {
            return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: (pos) => {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow(pos - 2, 5) + 2);
        },
    };

    // add animation loop
    const tick = () => {
        currentTime += 1 / 60;

        const p = currentTime / time;
        const t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);
            window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    };

    // call it once to get started
    tick();
}
/* eslint-enable */
