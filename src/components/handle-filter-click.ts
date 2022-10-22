import { filterIconIdentifier, filterMainClass } from '../const';
import { hideByParentElement } from '../posts/hide-by-parent-el';
import { unhidePost } from '../posts/unhide-post';
import { getParentEl, getPosition } from '../utils';
import { readFromLocalStorage, toggleFromStorage } from './local-storage';
import { log } from './logger';

/// for id extraction
const ID_SEPARATOR = ':';
const ID_SEPARATOR_INDEX = 3;

export const handleFilterClick = (eventTarget: HTMLElement) => {
    // to avoid propagation from other elements
    if (
        eventTarget!.hasAttribute(filterIconIdentifier) ||
        eventTarget!.parentElement!.parentElement!.hasAttribute(filterIconIdentifier) || //in case icon inside path was clicked
        eventTarget!.classList.contains(filterMainClass)
    ) {
        const parent = getParentEl(eventTarget) as Element;
        const ids = getId(parent);

        const storage = readFromLocalStorage();

        for (const id of ids) {
            if (!storage.has(id)) {
                log(`Ad ID on memory: NO`);
                hideByParentElement(parent);
            } else {
                log(`Ad ID on memory: YES`);
                unhidePost(id);
            }

            toggleFromStorage(id);
        }
    }
};

const getId = (el: Element) => {
    //el = data-id="urn:li:activity...
    const idText = el.getAttribute('data-id') as string;

    let id;
    //check if id aggregated
    if (idText.includes('aggregate')) {
        log('id is aggregated');
        const countOfColon = (idText.match(/:/g) || []).length;
        const position = getPosition(idText, ID_SEPARATOR, countOfColon);
        id = [...Array.from(idText)].slice(position + 1, idText.length - 2); //without starting colon, and without ending )
    } else {
        //not aggregated
        const splittedByColon = idText.split(':');
        id = [splittedByColon[splittedByColon.length - 1]];
    }

    log(`ID returned from getId: ${id.join(', ')}`);
    return id;
};
