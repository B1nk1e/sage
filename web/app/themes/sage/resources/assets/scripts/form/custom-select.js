import getParents from '../util/getParents';
import scrollToY from '../util/scrollY';
import offset from '../util/offset';
import { show, hide } from '../util/show-hide';

const toggleDropdown = (elmnt) => {
    const x = document.getElementsByClassName('select-items');
    const y = document.getElementsByClassName('select-selected');
    let i;
    const arrNo = [];

    for (i = 0; i < y.length; i += 1) {
        if (elmnt === y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove('select-arrow-active');
        }
    }

    for (i = 0; i < x.length; i += 1) {
        if (arrNo.indexOf(i)) {
            hide(x[i]);
            x[i].classList.add('select-hide');
            x[i].parentElement.classList.remove('custom-select--active');
        } else {
            x[i].classList.remove('select-hide');
        }
    }
};

const goToUrlOnChangeSelect = (url) => {
    if (url.indexOf('//') !== -1) {
        window.location = url;
    } else if (url.indexOf('#') !== -1) {
        const id = url.replace('#', '');
        const pagePart = document.getElementById(id);
        const navbar = document.querySelector('.navbar');
        const pagePartOffsetTop = offset(pagePart).top - navbar.offsetHeight - 25;
        scrollToY(pagePartOffsetTop, 1500, 'easeInOutQuint');
    }
};

const customSelect = () => {
    const customSelectEl = document.getElementsByClassName('custom-select');

    if (!customSelectEl.length) return;

    let animating = false;

    const regex = (str) => str
            .toLowerCase()
            .replace(/\s/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');

    const itemClickEvent = (item) => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();

            const itemsEl = this.nextElementSibling;

            if (animating) return false;

            toggleDropdown(this);

            if (itemsEl.classList.contains('show')) {
                hide(itemsEl);
            } else {
                show(itemsEl, !!this.parentElement.dataset.fixedheight);
            }

            this.nextElementSibling.classList.toggle('select-hide');
            this.parentElement.classList.toggle('custom-select--active');

            animating = true;

            setTimeout(() => {
                animating = false;
            }, 350);
        });
    };

    for (let i = 0; i < customSelectEl.length; i += 1) {
        const selElmnt = customSelectEl[i].getElementsByTagName('select')[0];
        const selectedItem = document.createElement('DIV');

        selectedItem.setAttribute('class', 'select-selected');
        selectedItem.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        customSelectEl[i].appendChild(selectedItem);

        const items = document.createElement('DIV');
        const innerItems = document.createElement('DIV');

        items.setAttribute('class', 'select-items collapse');
        innerItems.setAttribute('class', 'select-items__body');
        items.appendChild(innerItems);

        for (let j = 0; j < selElmnt.length; j += 1) {
            const item = document.createElement('DIV');
            item.setAttribute('class', 'select-items__body__option');
            item.innerHTML = selElmnt.options[j].innerHTML;

            if (
                selElmnt.selectedOptions[0].label.replace(/\s/g, '')
                === item.innerHTML.replace(/\s/g, '')
            ) {
                item.classList.add('same-as-selected');
            }

            item.addEventListener('click', function () {
                let y;
                let isub;
                let k;
                const s = getParents(
                    item,
                    '.custom-select'
                ).getElementsByTagName('select')[0];
                const h = getParents(
                    item,
                    '.select-items'
                ).previousElementSibling;

                for (isub = 0; isub < s.length; isub += 1) {
                    if (
                        regex(item.innerText)
                        === regex(s.options[isub].innerHTML)
                    ) {
                        s.selectedIndex = isub;
                        h.innerHTML = this.innerHTML;
                        y = this.parentElement.getElementsByClassName(
                                'same-as-selected'
                            );

                        for (k = 0; k < y.length; k += 1) {
                            y[k].classList.remove('same-as-selected');
                        }

                        this.classList.add('same-as-selected');

                        break;
                    }
                }

                h.click();
                goToUrlOnChangeSelect(s.value);
                s.dispatchEvent(new Event('change', { bubbles: true }));
            });

            innerItems.appendChild(item);
        }
        customSelectEl[i].appendChild(items);

        itemClickEvent(selectedItem);
    }

    document.addEventListener('click', toggleDropdown);
};

export { customSelect as default, goToUrlOnChangeSelect };
