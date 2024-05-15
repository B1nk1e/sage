export default function () {
    const reCalculateHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', () => {
        reCalculateHeight();
    });

    if (window.matchMedia('(max-width: 1280px)').matches) {
        reCalculateHeight();
    }
}
