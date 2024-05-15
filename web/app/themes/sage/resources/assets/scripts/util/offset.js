export default function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || window.scrollX;
    const scrollTop = window.pageYOffset || window.scrollY;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
