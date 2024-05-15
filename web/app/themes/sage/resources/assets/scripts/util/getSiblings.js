export const getSiblingsPrevNext = (element, type) => {
    const arraySib = [];
    if (type === 'prev') {
        // eslint-disable-next-line no-cond-assign
        while ((element = element.previousElementSibling)) {
            arraySib.push(element);
        }
    } else if (type === 'next') {
        // eslint-disable-next-line no-cond-assign
        while ((element = element.nextElementSibling)) {
            arraySib.push(element);
        }
    }
    return arraySib;
};

export function getSiblings(elem) {
    // Setup siblings array and get the first sibling
    const siblings = [];
    let sibling = elem.parentElement.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }

    return siblings;
}
