export default function (els, classes) {
    for (let i = 0; i < els.length; i += 1) {
        if (Array.isArray(classes)) {
            els[i].classList.remove(...classes);
        } else {
            els[i].classList.remove(classes);
        }
    }
}
