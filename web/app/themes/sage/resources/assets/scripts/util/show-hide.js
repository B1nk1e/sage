const getHeight = (element) => {
    element.style.display = 'block';
    const height = `${element.offsetHeight}px`;
    element.style.display = '';
    return height;
};

const show = (element) => {
    if (element.classList.contains('show')) return;

    const elementsHeight = getHeight(element);

    element.classList.remove('collapse');
    element.classList.add('collapsing');

    element.style.maxHeight = 0;

    const complete = () => {
        element.classList.remove('collapsing');
        element.classList.add('collapse');
        element.classList.add('show');
        element.removeAttribute('style');
    };

    setTimeout(complete, 350);

    setTimeout(() => {
        element.style.maxHeight = elementsHeight;
    }, 1);
};

const hide = (element) => {
    if (!element.classList.contains('show')) return;

    element.style.maxHeight = `${element.offsetHeight}px`;

    element.classList.add('collapsing');
    element.classList.remove('collapse');
    element.classList.remove('show');

    setTimeout(() => {
        element.style.maxHeight = 0;
    }, 1);

    const complete = () => {
        element.classList.remove('collapsing');
        element.classList.add('collapse');
        element.removeAttribute('style');
    };

    setTimeout(complete, 350);
};

export { getHeight, show, hide };
