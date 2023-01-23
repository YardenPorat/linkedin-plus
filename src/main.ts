import { observeTitle } from './components/observeTitle';
import { removeStaticAds } from './components/removeStaticAds';
import { debounce, getParentEl, getPosition } from './utils';
import { addCss } from './components/add-css';
import { log } from './components/logger';
import { hidePromotedPosts } from './posts/hide-promoted-posts';
import { waitForSelector } from './utils/wait-for-selector';
import { insertFilterIcon } from './components/insert-filter-icon';
import { filterType, PageFilter } from './pages';
import { PAGES } from './presets';

let pageDriver: PageFilter | undefined;

window.onload = () => {
    observeTitle();

    pageDriver = PageFilter.findPageType();
    if (pageDriver) {
        init();
    }
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'enteredFeed') {
        log('Enter feed from another section in linkedIn');
        init();
    }
});

const init = () => {
    addCss();
    waitForSelector(PAGES[filterType].firstLoadSelector, observePage);
    removeStaticAds();
    pageDriver?.processPage();
};

// const initJobs = () => {
//     addCss();
//     insertFilterIcon('[data-job-id]', handleFilterClick);
// };

const observePage = () => {
    const target = document.querySelector(PAGES[filterType].firstLoadSelector);
    if (!target) {
        log('Observable target not found');
        return;
    }

    const mainFeedObserver = new MutationObserver((data) => {
        log('Mutation observed');
        pageDriver?.processPage();
    });
    const config = { subtree: true, characterData: true, childList: true };
    mainFeedObserver.observe(target, config);
};
