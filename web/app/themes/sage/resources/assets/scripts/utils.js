/**
 * Execute a function when the DOM is fully loaded.
 *
 * @param {function} fn
 */
export default function ready(fn) {
    return document.readyState !== 'loading'
        ? window.setTimeout(fn, 0)
        : document.addEventListener('DOMContentLoaded', fn);
}
