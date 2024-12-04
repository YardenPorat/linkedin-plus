import { log } from '../components/logger';
import { classesToHide, HIDDEN_POST_FLAG } from '../const';

export const unhidePost = (id: string) => {
    // get main parent element
    const el = document.querySelector(`[data-id*="${id}"]`);
    if (el) {
        log.message('Found element to unhide');
        el.classList.remove(HIDDEN_POST_FLAG);

        const childrenToUnhide = el.querySelectorAll<HTMLElement>(classesToHide.toString());

        childrenToUnhide.forEach((child) => {
            child.removeAttribute('style');
        });
    }
};
