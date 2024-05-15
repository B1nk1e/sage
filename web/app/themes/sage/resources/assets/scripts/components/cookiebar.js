const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();

    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    const expires = `expires=${d.toUTCString()}`;

    document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

const getCookie = (cname) => {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];

        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return '';
};

const loadAcceptedScripts = () => {
    const cookieTypesToLoad = JSON.parse(getCookie('enabl_consent'));

    if (!cookieTypesToLoad.length) return;

    [].forEach.call(cookieTypesToLoad, (cookieType) => {
        if (cookieType === 'statistics' || cookieType === 'marketing') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: `cookiewall_${cookieType}`,
            });
        }
    });
};

const initCookieBar = () => {
    const cookiebar = document.querySelector('.cookie-consent');
    // Stop this function from executing if no cookiebar is found in the DOM

    if (!cookiebar && getCookie('enabl_consent').length > 0) {
        loadAcceptedScripts();
        return;
    }

    if (!cookiebar) { return; }

    // Only add class if cookie has not been accepted yet
    if (!getCookie('enabl_consent').length > 0) {
        cookiebar.classList.add('cookie-consent--unaccepted');
    }

    // Let's create a function that we can bind to our eventListener
    const acceptCookies = () => {
        cookiebar.classList.remove('cookie-consent--unaccepted');

        // Let's remove the eventListener since we don't need it anymore.
        document.querySelector('.cookie-consent__btn').removeEventListener('click', acceptCookies);

        // Get a nodelist of all the selected checkboxes
        const checkedBoxes = document.querySelectorAll('.cookie-consent input:checked');

        // Building an array of all accepted cookie types
        const acceptedCookieTypes = [];

        [].forEach.call(checkedBoxes, (checkbox) => {
            acceptedCookieTypes.push(checkbox.value);
        });

        // Setting the cookie with a stringified version of the array we just built
        setCookie('enabl_consent', JSON.stringify(acceptedCookieTypes), 30);

        // Now that the cookie is set, let's start loading the scripts
        loadAcceptedScripts();

        // Wait untill the animation had a chance to finish
        setTimeout(() => {
            // Let's remove the cookiebar from the DOM, since we don't need it anymore
            cookiebar.parentNode.removeChild(cookiebar);
        }, 300);
    };

    // Initiate the eventListener so the user can accept cookies.
    document.querySelector('.cookie-consent__btn').addEventListener('click', acceptCookies);
};

export { initCookieBar, setCookie };
