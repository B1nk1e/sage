import registerGsapPlugins from '../components/registerGsapPlugins';
import calculateHeight from '../util/height';
import accordion from '../components/accordion';
import customSelect from '../form/custom-select';
import validate from '../form/validation';
import dataAnimate from '../util/dataAnimate';
import { initCookieBar } from '../components/cookiebar';

export default () => {
    registerGsapPlugins();
    calculateHeight();
    accordion();
    customSelect();
    validate();
    dataAnimate();
    initCookieBar();
};
