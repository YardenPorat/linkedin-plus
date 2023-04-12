import { filterIconHtml as getFilterIconHtml, filterMainClass } from '../const';
import { getLogger } from './logger';

const LISTENER_ADDED_CLASS = 'listenerAdded';
const FILTER_ADDED_FLAG = 'filterAdded';

const log = getLogger(['insert-filter-icon.ts']);

/**
 * Insert filter icon in the top right corner of each post
 */
export const insertFilterIcon = (
    containerSelector: string,
    onClick: (eventTarget: MouseEvent) => void,
    parentStyles?: { [key: string]: string } | undefined
) => {
    const iconContainers = Array.from(
        document.querySelectorAll<HTMLElement>(`${containerSelector}:not(.${FILTER_ADDED_FLAG})`)
    );
    log(`Found ${iconContainers.length} containers for filter icon - inserting icon`);
    if (!iconContainers.length) {
        log('Selector: ' + containerSelector);
    }

    iconContainers.forEach((iconContainer) => {
        iconContainer.classList.add(FILTER_ADDED_FLAG); //add a class so it won't be re-added to the array
        iconContainer.insertAdjacentHTML('beforebegin', getFilterIconHtml());
        if (parentStyles) {
            Object.entries(parentStyles).forEach(([key, value]) => {
                iconContainer.parentElement!.style.setProperty(key, value);
            });
        }
    });

    //insert listener on filter icon
    const filterIcons = Array.from<HTMLElement>(
        document.querySelectorAll(`.${filterMainClass}:not(.${LISTENER_ADDED_CLASS})`)
    );
    filterIcons.forEach((filterIcon) => {
        filterIcon.classList.add(LISTENER_ADDED_CLASS);
        filterIcon.addEventListener('click', onClick);
    });
};
