import { filterIconHtml, filterMainClass } from '../const';
import { handleFilterClick } from './handle-filter-click';
import { log } from './logger';

const LISTENER_ADDED_CLASS = 'listenerAdded';
const FILTER_ADDED_FLAG = 'filterAdded';

/**
 * Insert filter icon in the top right corner of each post
 */
export const insertFilterIcon = () => {
    const optionIcons = Array.from(
        document.querySelectorAll(`li-icon[aria-label="Open control menu"]:not(.${FILTER_ADDED_FLAG})`)
    );
    log(`Found ${optionIcons.length} option icons - inserting filter icon`);

    optionIcons.forEach((optionIcon) => {
        optionIcon.classList.add(FILTER_ADDED_FLAG); //add a class so it won't be re-added to the array

        //inserted high, in order not to disappear when hiding children
        (optionIcon.parentNode!.parentNode!.parentNode!.parentNode as HTMLElement).insertAdjacentHTML(
            'beforebegin',
            filterIconHtml()
        );
    });

    //insert listener on filter icon
    const filterIcons = Array.from(document.querySelectorAll(`.${filterMainClass}:not(.${LISTENER_ADDED_CLASS})`));
    filterIcons.forEach((filterIcon) => {
        filterIcon.classList.add(LISTENER_ADDED_CLASS);
        filterIcon.addEventListener('click', (e) => {
            e.stopPropagation();

            handleFilterClick(e.target as HTMLElement);
        });
    });
};
