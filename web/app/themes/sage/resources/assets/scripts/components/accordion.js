import { hide, show } from '../util/show-hide';
import getParents from '../util/getParents';

const closeAllExceptCurrentEvent = (elemnt, itemsByClassName, termElement, descriptionElement) => {
    let i;
    let j;
    const elements = document.querySelectorAll(itemsByClassName);
    const arr = [];

    for (i = 0; i < elements.length; i += 1) {
        arr.push(elements[i]);

        if (elements[i] === elemnt.parentElement) {
            arr.splice(i, 1);
        }
    }

    for (j = 0; j < arr.length; j += 1) {
        const term = arr[j].querySelector(termElement);
        const description = arr[j].querySelector(descriptionElement);

        if (term) {
            if (term.classList.contains('open')) {
                term.classList.remove('open');
            }
        }
        if (description) {
            hide(description);
        }
    }
};

const accordion = () => {
    const accordionHolder = document.querySelectorAll('.accordion__holder');

    if (!accordionHolder.length > 0) return;

    Array.from(document.querySelectorAll('.accordion__term'))
        .forEach((el) => {
            el.onclick = (function () {
                const collapse = this.nextElementSibling;
                const parent = getParents(el, '.accordion__item');
                if (collapse.classList.contains('show')) {
                    hide(collapse);
                    parent.classList.remove('active');
                    parent.blur();
                } else {
                    show(collapse);
                    parent.focus();
                    closeAllExceptCurrentEvent(this, '.accordion__item', '.accordion__term', '.accordion__body');
                }

                this.classList.toggle('open');
            });
        });
};

export {
    accordion as default,
    closeAllExceptCurrentEvent,
};
