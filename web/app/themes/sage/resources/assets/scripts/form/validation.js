/* global validationMessages */
import getParents from '../util/getParents';

let selectedFirst = false;

const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = true;

    if (!regex.test(email.value)) {
        valid = false;
    }

    return valid;
};

const validateDate = (date) => {
    const regex = /^(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}$/;
    let valid = true;

    if (!regex.test(date.value)) {
        valid = false;
    }

    return valid;
};

const buildError = (element) => {
    const holder = getParents(element, '.form-group');

    if (!holder || holder.querySelector('.validation--invalid') !== null) {
        return false;
    }

    const error = holder.querySelector('.validation.validation--invalid')
        ? holder.querySelector('.validation.validation--invalid')
        : document.createElement('span');

    holder.classList.add('form-group--error');
    error.classList.add('validation', 'validation--invalid');

    switch (element.type) {
        case 'email':
            error.textContent = validationMessages.email
                ? validationMessages.email
                : 'Invalid email address.';
            break;
        case 'tel':
            error.textContent = validationMessages.phone
                ? validationMessages.phone
                : 'Invalid phone number.';
            break;
        default:
            error.textContent = validationMessages.default
                ? validationMessages.default
                : 'This field is required.';
    }

    if (element.tagName === 'SELECT') {
        error.textContent = validationMessages.default
            ? validationMessages.default
            : 'Select an item from the list.';
    }

    holder.appendChild(error);
};

const checkErrorOnInput = (button, form) => {
    const inputs = form.querySelectorAll('[required]');

    const buttonVisibility = (valid, input, error, holder) => {
        if (!valid) {
            buildError(input);
            button.disabled = true;
        } else {
            if (error) {
                holder.classList.remove('form-group--error');
                error.classList.remove('validation--invalid');
                error.textContent = '';
            }
            button.disabled = false;
        }
    };

    Array.from(inputs).forEach((input) => {
        if (input.tagName === 'SELECT') {
            input.nextElementSibling.addEventListener('click', () => {
                if (selectedFirst) {
                    const holder = getParents(input, '.form-group');
                    const error = holder.querySelector('.validation--invalid');
                    let valid = true;

                    if (input.value === '') {
                        valid = false;
                    }

                    buttonVisibility(valid, input, error, holder);
                }
            });
        } else {
            input.addEventListener('input', () => {
                const holder = getParents(input, '.form-group');
                const error = holder.querySelector('.validation--invalid');
                let valid = true;

                if (
                    input.value === ''
                    || (input.type === 'checkbox' && !input.checked)
                ) {
                    valid = false;
                }

                if (input.type === 'email') {
                    valid = validateEmail(input);
                }

                if (input.type === 'text' && input.name.includes('day')) {
                    valid = validateDate(input);
                }

                buttonVisibility(valid, input, error, holder);
            });
        }
    });
};

const requiredInputs = (form) => {
    let valid = true;
    Array.from(form.querySelectorAll('[required]')).forEach((input) => {
        if (
            input.value === ''
            || (input.type === 'checkbox' && !input.checked)
        ) {
            buildError(input);
            valid = false;
            selectedFirst = true;
        }
    });

    return valid;
};

const validateOnSubmit = () => {
    const form = document.querySelectorAll('form');

    if (form.length === 0) return;

    Array.from(form).forEach((el) => {
        const button = el.querySelector('[type="submit"]');

        // Check if form is valid on input
        checkErrorOnInput(button, el);

        if (!button) return;

        // Check if form is valid on click
        button.addEventListener('click', (ev) => {
            const validateIt = requiredInputs(el);

            if (!validateIt) ev.preventDefault();
            return false;
        });
    });
};

export default function validate() {
    validateOnSubmit();
}
