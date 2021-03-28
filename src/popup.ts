import { classesToHide } from './const';
import { filterIconHtml } from './const';
import { observeTitle } from './components/observeTitle';
import { removeStaticAds } from './components/removeStaticAds';
import { debounce, getParentEl, getPosition, waitForSelector } from './utils';

/// for id extraction
export const ID_SEPARATOR = ':';
export const ID_SEPARATOR_INDEX = 3;
export const ID_SEPARATOR_INDEX_AGGREGATE = 5;

export const filterMainClass = 'filter-ad';
export const filterIconIdentifier = `filter-icon-zzz`;
export const filterSvgClass = 'filterSvg';
export const LISTENER_ADDED_CLASS = 'listenerAdded';
export const MAIN_FEED_SELECTOR = 'main#main';

export const DEBUG_MODE = false;

window.onload = () => {
    observeTitle();

    if (window.location.href.includes('linkedin.com/feed')) {
        addCss();
        waitForSelector(MAIN_FEED_SELECTOR, observeMainFeed);
        removeStaticAds();
    }
};

const observeMainFeed = () => {
    const target = document.querySelector(MAIN_FEED_SELECTOR) as HTMLDivElement;
    const mainFeedObserver = new MutationObserver(() => {
        DEBUG_MODE && console.log('change observed');
        debounceProcessNewPosts();
    });
    const config = { subtree: true, characterData: true, childList: true };
    mainFeedObserver.observe(target, config);
};

const processNewPosts = () => {
    DEBUG_MODE && console.log('entered function: processNewPosts');
    hideOnLoadOrScroll();
    hidePromotedPosts();
    insertFilter();
};

const debounceProcessNewPosts = debounce(processNewPosts, 400);

const addCss = () => {
    document.head.insertAdjacentHTML(
        'beforeend',
        `<style>
            .${filterMainClass}{
                border-radius: 50px;
                position: absolute;
                right: 46px;
                top: 4px;
                z-index: 1;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 3.2rem;
                width: 3.2rem;
            }
        
            .${filterMainClass}:hover{
                background-color: rgb(235,235,235);
            }
            .${filterMainClass}:active{
                background-color: #D9D9D9;
            }

            .${filterSvgClass}{
                z-index: 0;
                height: 20px;
                fill: #797979;
            }
            </style>`.trim()
    );
};

const hidePromotedPosts = () => {
    //choosing page elements to hide
    let arr = [
        ...Array.from(
            document.querySelectorAll(
                'span.feed-shared-actor__sub-description.t-12.t-normal.t-black--light'
            )
        ),
    ]; // get all the divs in an array
    arr = arr.filter((item) => (item as HTMLElement).innerText == 'Promoted');

    arr.forEach((promoted) => {
        (promoted as HTMLElement).innerText = 'Hidden by LinkedIn Plus';
        (promoted.parentNode!.parentNode!.parentNode!
            .parentNode as HTMLElement)!.style.display = 'none';
    });
    arr.length && console.log(`${arr.length} promoted posts hidden`);
};

const insertFilter = () => {
    // insert filter icon
    const optionIcons = [
        ...Array.from(
            document.querySelectorAll(
                'li-icon[type="ellipsis-horizontal-icon"][aria-label="Open control menu"]:not(.filterAdded)'
            )
        ),
    ];

    optionIcons.forEach((optionIcon) => {
        optionIcon.classList.add('filterAdded'); //add a class so it won't be re-added to the array

        //inserted high, in order not to disappear when hiding children
        (optionIcon.parentNode!.parentNode!.parentNode!
            .parentNode as HTMLElement).insertAdjacentHTML(
            'beforebegin',
            filterIconHtml(
                filterMainClass,
                filterIconIdentifier,
                filterSvgClass
            )
        );
    });

    //insert listener on filter icon
    const filterIcons = [
        ...Array.from(
            document.querySelectorAll(
                `.${filterMainClass}:not(.${LISTENER_ADDED_CLASS})`
            )
        ),
    ];
    filterIcons.forEach((filterIcon) => {
        filterIcon.classList.add(LISTENER_ADDED_CLASS);
        filterIcon.addEventListener('click', (e) => {
            e.stopPropagation();

            handleFilterClick(e.target as HTMLElement);
        });
    });
};

const handleFilterClick = (eventTarget: HTMLElement) => {
    // to avoid propagation from other elements
    if (
        eventTarget!.hasAttribute(filterIconIdentifier) ||
        eventTarget!.parentElement!.parentElement!.hasAttribute(
            filterIconIdentifier
        ) || //in case icon inside path was clicked
        eventTarget!.classList.contains(filterMainClass)
    ) {
        const parent = getParentEl(eventTarget) as Element;
        DEBUG_MODE &&
            console.log(
                `Got parent element:
      ${parent}`
            );
        const id = getId(parent);
        const idIndexOnMemory = isOnMemory(id);

        if (idIndexOnMemory === -1) {
            DEBUG_MODE && console.log(`Ad ID on memory: NO`);
            hideByParentElement(parent);
        } else {
            DEBUG_MODE && console.log(`Ad ID on memory: YES`);
            unhidePost(id);
        }

        saveOrRemoveIdFromMemory(id, idIndexOnMemory);
    } else {
        // console.log(`target doesn't have att '${filterIconIdentifier}'`);
        // console.log(e.target);
    }
};

const hideByParentElement = (el: Element) => {
    //el = data-id="urn:li:activity...
    if (el.hasAttribute('data-id')) {
        const success = hideAllChildren(el);
        if (success) {
            el.classList.add('hiddenPost');
        }
    } else {
        console.log(`ERROR. trying to hide parent with wrong el.`);
    }
};

const hideAllChildren = (el: Element) => {
    DEBUG_MODE && console.log('Trying to hide ads CHILD ELEMENTS');

    const dataUrnEl = getDataUrnEl(el);
    if (dataUrnEl) {
        const childrenToHide = el.querySelectorAll(classesToHide.toString());
        childrenToHide.forEach((child) => {
            (child as HTMLElement).style.display = 'none';
        });

        return true;
    } else {
        return false;
    }
};

const getDataUrnEl = (el: Element) => {
    if (DEBUG_MODE) {
        console.log('Trying to get data-urn element, from the following:');
        console.log(el);
    }

    const dataUrnEl = el.querySelector('[data-urn]');

    if (DEBUG_MODE) {
        console.log('Found the following data-urn element:');
        console.log(dataUrnEl);
    }

    return dataUrnEl;
};

const unhidePost = (id: string) => {
    // get main parent element
    const el = document.querySelector(`[data-id*="urn:li:activity:${id}"]`);
    if (el) {
        el.classList.remove('hiddenPost');

        // unhide children
        const dataUrnEl = getDataUrnEl(el)!;

        const childrenToUnhide = el.querySelectorAll(classesToHide.toString());
        childrenToUnhide.forEach((child) => {
            (child as HTMLElement).removeAttribute('style');
        });
    }
};

const readFromLocalStorage = () => {
    // Retrieve your data from locaStorage (get from localStorage or create new Obj)
    const memoryData = localStorage.getItem('filtered')
        ? JSON.parse(localStorage.getItem('filtered')!)
        : [];
    return [...memoryData];
};

const isOnMemory = (id: string): number => {
    const memory = readFromLocalStorage();
    let index = -1;
    memory.forEach((ad, i) => {
        if (ad.id === id) index = i;
    });
    return index;
};

const saveOrRemoveIdFromMemory = (
    id: string,
    idIndexOnMemory: number
): void => {
    const memory = { filtered: readFromLocalStorage() };

    if (id != null) {
        if (idIndexOnMemory === -1) {
            memory.filtered.push({ id: id, date: Date.now() });
            console.log(`'${id}' ADDED`);
        } else {
            memory.filtered.splice(idIndexOnMemory, 1);
            console.log(`'${id}' REMOVED`);
        }
    }
    localStorage.setItem('filtered', JSON.stringify(memory.filtered));
};

// Hide on first load id's from localStorage
const hideOnLoadOrScroll = () => {
    //read again from memory
    const memory = { filtered: readFromLocalStorage() };

    DEBUG_MODE &&
        console.log(
            `filtering saved posts by id: ${memory.filtered.length} posts`
        );

    memory.filtered.forEach(({ id }) => {
        const el = document.querySelector(
            // :not(.hiddenPost) - in order not to double hide posts
            `[data-id="urn:li:activity:${id}"]:not(.hiddenPost)`
        );
        if (el) {
            console.log(`ID found. hiding ID:${id}`);
            hideByParentElement(el);
        }
    });
};

const getId = (el: Element) => {
    //el = data-id="urn:li:activity...
    const idText = el.getAttribute('data-id') as string;

    DEBUG_MODE && (console.log('Trying to get id from:'), console.log(idText));

    let id;
    //check if id aggregated
    if (idText.includes('aggregate')) {
        DEBUG_MODE && console.log('id is aggregated');
        const countOfColon = (idText.match(/:/g) || []).length;
        const position = getPosition(idText, ID_SEPARATOR, countOfColon);
        id = [...Array.from(idText)]
            .slice(position + 1, idText.length - 2) //without starting colon, and without ending )
            .join('');
    } else {
        //not aggregated
        const position = getPosition(idText, ID_SEPARATOR, ID_SEPARATOR_INDEX);
        id = [...Array.from(idText)].slice(position + 1).join('');
    }

    DEBUG_MODE && console.log(`ID returned from getId: ${id}`);
    return id;
};
