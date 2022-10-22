import { log } from '../components/logger';
import { classesToHide } from '../const';
import { getDataUrnEl } from '../utils/get-data-urn-el';

export const hideAllChildren = (el: Element) => {
    log('Trying to hide ads child elements');

    const dataUrnEl = getDataUrnEl(el);
    if (dataUrnEl) {
        const childrenToHide = el.querySelectorAll(classesToHide.toString()) as NodeListOf<HTMLElement>;

        childrenToHide.forEach((child) => {
            child.style.display = 'none';
        });

        return true;
    } else {
        return false;
    }
};
