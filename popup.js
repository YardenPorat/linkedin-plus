/// for id extraction
const ID_SEPARATOR = ':';
const ID_SEPARATOR_INDEX = 3;

const filterClass = 'filter-ad';
//for filter icon
const htmlIcon = `<div 
                        style="position: absolute; right: 46px; top: 7px; z-index: 100; cursor: pointer; " class="${filterClass}" >
                        <img filterIcon style="height: 20px;" src="https://img.icons8.com/android/24/000000/filter.png" />
                    </div>`;

window.onload = event => {
    //onload + 2 seconds to construct page
    setTimeout(() => init(), 3000);
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

const hidePromotedAds = () => {
    //choosing page elements to hide
    arr = [
        ...document.querySelectorAll(
            'span.feed-shared-actor__sub-description.t-12.t-normal.t-black--light'
        ),
    ]; // get all the divs in an array
    arr = arr.filter(item => item.innerText == 'Promoted');
    console.log(`found ${arr.length} promoted posts`);
    arr.forEach(promoted => {
        promoted.innerText = 'Hidden by LinkedIn Plus';
        promoted.parentNode.parentNode.parentNode.parentNode.style.display =
            'none';
    });
};

const insertFilter = () => {
    optionIcons = [
        ...document.querySelectorAll(
            'li-icon[type="ellipsis-horizontal-icon"][aria-label="Open control menu"]:not(.filterAdded)'
        ),
    ];
    optionIcons.forEach(icon => {
        icon.classList.add('filterAdded'); //add a class so it won't be re-added to the array

        //inserted high, in order not to disappear when hiding children
        icon.parentNode.parentNode.parentNode.parentNode.insertAdjacentHTML(
            'beforebegin',
            htmlIcon
        ); //insert filter icon
        icon.parentNode.parentNode.parentNode.parentNode.parentNode.addEventListener(
            'click',
            e => {
                // set event listener on each icon
                e.preventDefault();
                console.log('filter was clicked');
                handleFilterClick(e);
            }
        );
    });
};

const handleFilterClick = e => {
    // to avoid propagation from other elements
    if (e.target.hasAttribute('filterIcon')) {
        e.stopPropagation();
        const parent = getParentEl(e.target);
        const id = getId(parent);
        const isIdOnMemory = isOnMemory(id);
        if (!isOnMemory(id)) {
            hideByParentElement(parent);
        } else {
            unhidePost(id);
        }

        saveOrRemoveIdFromMemory(id, isIdOnMemory);
    }
};

const hideByParentElement = el => {
    //el = data-id="urn:li:activity...
    if (el.hasAttribute('data-id')) {
        const sucess = hideAllChildren(el);
        if (sucess) {
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
        console.log(secondaryEl);
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
    if (
        el.firstElementChild.nextElementSibling &&
        el.firstElementChild.nextElementSibling.hasAttribute('data-urn')
    ) {
        el = el.firstElementChild.nextElementSibling;
    } else if (
        el.firstElementChild.firstElementChild &&
        el.firstElementChild.firstElementChild.hasAttribute('data-urn')
    ) {
        el = el.firstElementChild.firstElementChild;
    } else if (
        el.firstElementChild.firstElementChild &&
        el.firstElementChild.firstElementChild.nextElementSibling &&
        el.firstElementChild.firstElementChild.nextElementSibling.hasAttribute(
            'data-urn'
        )
    ) {
        el = el.firstElementChild.firstElementChild.nextElementSibling;
    } else {
        // console.log(`didn't found data-urn`);
        return;
    }
    console.log(el);
    return el;
};

const unhidePost = id => {
    // get main parent element
    let el = document.querySelector(`[data-id="urn:li:activity:${id}"]`);
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
            // console.log(
            //     `child class list: ${child.classList}, class checked: ${cls}`
            // );
            if (child.classList.contains(cls)) {
                child.removeAttribute('style');
            }
        }
    });
};

const getId = el => {
    //el = data-id="urn:li:activity...
    const idText = el.getAttribute('data-id');
    const position = getPosition(idText, ID_SEPARATOR, ID_SEPARATOR_INDEX);
    const id = [...idText].slice(position + 1).join('');
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

    console.log(`filtering saved posts by id: ${memory.filtered.length} posts`);

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
