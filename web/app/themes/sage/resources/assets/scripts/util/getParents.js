/**
 *
 * @param {Node} elem Element of which you want to find a parent node
 * @param {string} selector Selector of parent element that should be returned
 */

export default function getParents(elem, selector) {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector
            || Element.prototype.webkitMatchesSelector;
    }

    for (; elem; elem = elem.parentElement) {
        if (elem.matches(selector)) return elem;
    }
    return null;
}
