/// for id extraction
const ID_SEPARATOR = ':';
const ID_SEPARATOR_INDEX = 3;
const ID_SEPARATOR_INDEX_AGGREGATE = 5;
const RERUN_ON_HIDES = 3;
let hideClickCounter = 0;
const FILTER_CLASS = 'filter-ad';
const filterIconIdentifier = `filtericonzzz`;
const filterSvgClass = 'filterSvg';
const LISTENER_ADDED_CLASS = 'listnerAdded';
//for filter icon
const htmlIcon = `<div class="${FILTER_CLASS}">
                        <svg ${filterIconIdentifier} class="${filterSvgClass}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" 
                        style="enable-background:new 0 0 512 512;" xml:space="preserve"
                        >
                            <g>
                                <path d="M276,246c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C286,250.48,281.52,246,276,246z"/>
                            </g>
                            <g>
                                <path d="M472,26H40C17.944,26,0,43.944,0,66c0,22.097,17.898,40,40,40h11.194L206,299.508V476c0,3.466,1.795,6.685,4.743,8.506    c2.948,1.823,6.63,1.987,9.729,0.438l80-40C303.86,443.25,306,439.788,306,436V299.508L460.806,106H472c22.056,0,40-17.944,40-40    C512,43.903,494.102,26,472,26z M286,429.82l-60,30V306h60V429.82z M291.193,286h-70.387l-144-180h358.388L291.193,286z M472,86    H40c-11.045,0-20-8.954-20-20c0-11.028,8.972-20,20-20h432c11.045,0,20,8.954,20,20C492,77.028,483.028,86,472,86z"/>
                            </g>
                            <g>
                                <path d="M379.027,128.191c-4.312-3.451-10.606-2.75-14.056,1.562l-71.33,89.16c-3.45,4.313-2.75,10.606,1.562,14.056    c4.304,3.443,10.598,2.76,14.056-1.562l71.33-89.16C384.039,137.934,383.34,131.642,379.027,128.191z"/>
                            </g>
                        </svg>
                    </div>`;

window.onload = event => {
    //onload + 2 seconds to construct page
    setTimeout(() => init(), 3000);
    addCss();
};

const init = () => {
    console.log('page is fully loaded');
    const body = document.querySelector('body');
    let pageHeight = body.scrollHeight;

    hidePromotedAds();
    insertFilter();
    setTimeout(() => hideOnLoadOrScroll(), 1500);
    setTimeout(() => insertFilter(), 3000);

    window.addEventListener('scroll', () => {
        if (body.scrollHeight > pageHeight) {
            pageHeight = body.scrollHeight;
            hidePromotedAds();
            insertFilter();
            hideOnLoadOrScroll();
        }
    });
};

const addCss = () => {
    document.head.insertAdjacentHTML(
        'beforeend',
        `<style>
            .${FILTER_CLASS}{
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
        
            .${FILTER_CLASS}:hover{
                background-color: rgb(235,235,235);
            }
            .${FILTER_CLASS}:active{
                background-color: #D9D9D9;
            }


            .${filterSvgClass}{
                z-index: 0;
                height: 20px;
                fill: #797979;
            }
            
            </style>`
    );
};

const hidePromotedAds = () => {
    //choosing page elements to hide
    arr = [
        ...document.querySelectorAll(
            'span.feed-shared-actor__sub-description.t-12.t-normal.t-black--light'
        ),
    ]; // get all the divs in an array
    arr = arr.filter(item => item.innerText == 'Promoted');

    arr.forEach(promoted => {
        promoted.innerText = 'Hidden by LinkedIn Plus';
        promoted.parentNode.parentNode.parentNode.parentNode.style.display =
            'none';
    });
    arr.length && console.log(`${arr.length} promoted posts hidden`);
};

const insertFilter = () => {
    // insert filter icon
    const optionIcons = [
        ...document.querySelectorAll(
            'li-icon[type="ellipsis-horizontal-icon"][aria-label="Open control menu"]:not(.filterAdded)'
        ),
    ];
    optionIcons.forEach(optionIcon => {
        optionIcon.classList.add('filterAdded'); //add a class so it won't be re-added to the array

        //inserted high, in order not to disappear when hiding children
        optionIcon.parentNode.parentNode.parentNode.parentNode.insertAdjacentHTML(
            'beforebegin',
            htmlIcon
        );
    });

    //insert listener on filter icon
    const filterIcons = [
        ...document.querySelectorAll(
            `.${FILTER_CLASS}:not(.${LISTENER_ADDED_CLASS})`
        ),
    ];
    filterIcons.forEach(filterIcon => {
        filterIcon.classList.add(LISTENER_ADDED_CLASS);
        filterIcon.addEventListener('click', e => {
            // console.log(e.target); //testing
            e.stopPropagation();
            handleFilterClick(e);
        });
    });
};

const handleFilterClick = e => {
    // to avoid propagation from other elements
    if (
        e.target.hasAttribute(filterIconIdentifier) ||
        e.target.parentElement.parentElement.hasAttribute(
            filterIconIdentifier
        ) || //in case icon inside path was clicked
        e.target.classList.contains(FILTER_CLASS)
    ) {
        const parent = getParentEl(e.target);
        const id = getId(parent);
        const isIdOnMemory = isOnMemory(id);
        if (!isOnMemory(id)) {
            hideByParentElement(parent);
            hideClickCounter++;
        } else {
            unhidePost(id);
            hideClickCounter--;
        }

        saveOrRemoveIdFromMemory(id, isIdOnMemory);

        if (hideClickCounter == RERUN_ON_HIDES) {
            insertFilter();
            hidePromotedAds();
            hideClickCounter = 0;
        }
    } else {
        // console.log(`target doesn't have att '${filterIconIdentifier}'`);
        // console.log(e.target);
    }
};

const hideByParentElement = el => {
    //el = data-id="urn:li:activity...
    if (el.hasAttribute('data-id')) {
        const success = hideAllChildren(el);
        if (success) {
            el.classList.add('hiddenPost');
        }
    } else {
        console.log(`ERROR. trying to hide parent with wront el.`);
    }
};

const hideAllChildren = el => {
    el = getDataUrnEl(el);
    if (el) {
        const classesToHide = [
            'feed-shared-update-v2__update-content-wrapper',
            'feed-shared-update-v2__description-wrapper',
            'feed-shared-update-v2__content',
            'social-details-social-activity',
            'Elevation-0dp',
        ];
        secondaryEl = [...el.children]; //data-urn="urn:li:activity:..."
        // console.log(secondaryEl);
        secondaryEl.forEach(child => {
            for (let cls of classesToHide) {
                // console.log(
                //     `child class list: ${child.classList}, class checked: ${cls}`
                // );
                if (child.classList.contains(cls)) {
                    child.style.display = 'none';
                    // console.log(`hidden`);
                }
            }
        });
        return true;
    } else {
        return false;
    }
};

const getDataUrnEl = el => {
    // because data-urn is immediately loaded
    if (el.firstElementChild.nextElementSibling?.hasAttribute('data-urn')) {
        el = el.firstElementChild.nextElementSibling;
    } else if (
        el.firstElementChild.firstElementChild?.hasAttribute('data-urn')
    ) {
        el = el.firstElementChild.firstElementChild;
    } else if (
        el.firstElementChild.firstElementChild?.nextElementSibling?.hasAttribute(
            'data-urn'
        )
    ) {
        el = el.firstElementChild.firstElementChild.nextElementSibling;
    } else {
        // console.log(`didn't found data-urn`);
        return;
    }
    // console.log(el);
    return el;
};

const unhidePost = id => {
    // get main parent element
    console.log(id);
    let el = document.querySelector(`[data-id*="urn:li:activity:${id}"]`);
    el.classList.remove('hiddenPost');
    // unhide children
    el = getDataUrnEl(el);

    const classesToUnhide = [
        'feed-shared-update-v2__update-content-wrapper',
        'feed-shared-update-v2__description-wrapper',
        'feed-shared-update-v2__content',
        'social-details-social-activity',
    ];
    secondaryEl = [...el.children]; //data-urn="urn:li:activity:..."
    secondaryEl.forEach(child => {
        for (let cls of classesToUnhide) {
            child.classList.contains(cls) && child.removeAttribute('style');
        }
    });
};

const getId = el => {
    //el = data-id="urn:li:activity...
    const idText = el.getAttribute('data-id');
    const position = getPosition(idText, ID_SEPARATOR, ID_SEPARATOR_INDEX);
    let id = [...idText].slice(position + 1).join('');

    //check in case data-id id is aggregated
    if (id[0] == '(') {
        const position = getPosition(
            idText,
            ID_SEPARATOR,
            ID_SEPARATOR_INDEX_AGGREGATE
        );
        id = [...id].slice(position + 1).join('');
        console.log(`aggregated id: ${id}`);
    }

    return id;
};

function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}

const readFromLocalStorage = () => {
    // Retrieve your data from locaStorage (get from localStorage or create new Obj)
    const memoryData = localStorage.getItem('filtered')
        ? JSON.parse(localStorage.getItem('filtered'))
        : [];
    return [...memoryData];
};

const isOnMemory = id => {
    const memory = readFromLocalStorage();
    return memory.includes(id);
};

const saveOrRemoveIdFromMemory = (id, isIdOnMemory) => {
    const memory = { filtered: readFromLocalStorage() };

    let i = memory.filtered.indexOf(id);
    if (id != null) {
        if (!isIdOnMemory) {
            memory.filtered.push(id);
            console.log(`ID: '${id}' WASN'T on storage -> ADDED`);
        } else {
            memory.filtered.splice(i, 1);
            console.log(`ID '${id}' WAS IN STORAGE -> REMOVED`);
        }
    }
    localStorage.setItem('filtered', JSON.stringify(memory.filtered));
};

// Hide on first load id's from localStorage
const hideOnLoadOrScroll = () => {
    //read again from memory
    const memory = { filtered: readFromLocalStorage() };

    //testing
    // console.log(`filtering saved posts by id: ${memory.filtered.length} posts`);

    memory.filtered.forEach(id => {
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

const getParentEl = el => {
    while (!el.hasAttribute('data-id')) {
        el = el.parentElement;
    }
    return el;
};
