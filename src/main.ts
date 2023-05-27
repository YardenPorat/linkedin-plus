import { observeTitle } from './components/observeTitle';
import { removeStaticAds } from './components/removeStaticAds';
import { addCss } from './components/add-css';
import { waitForSelector } from './utils/wait-for-selector';
import { filterType, PageFilter } from './pages';
import { PAGES } from './presets';
import { getLogger } from './components/logger';
import { PROMOTED_POST_HIDDEN } from './const';

const log = getLogger(['main.ts']);

window.onload = onLoad;
chrome.runtime.onMessage.addListener(function (request) {
    if (request.message === 'enteredFeed') {
        log('Enter feed from another section in linkedIn');
        onLoad();
    }
});

const init = (pageDriver: PageFilter) => {
    addCss();
    waitForSelector(PAGES[filterType].firstLoadSelector, () => observePage(pageDriver));
    removeStaticAds();
    pageDriver.processPage();
};

const observePage = (pageDriver: PageFilter) => {
    const target = document.querySelector(PAGES[filterType].firstLoadSelector);
    if (!target) {
        log(`Observable target not found (${PAGES[filterType].firstLoadSelector})`);
        return;
    }

    const mainFeedObserver = new MutationObserver((mutations) => {
        let addedNodes = 0;
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node instanceof HTMLElement && node.textContent !== PROMOTED_POST_HIDDEN) {
                    addedNodes++;
                    break;
                }
            }

            if (addedNodes > 0) {
                log('Mutation observed');
                pageDriver.processPage();
                break;
            }
        }
    });
    const config = { subtree: true, characterData: true, childList: true };
    mainFeedObserver.observe(target, config);
    log('Observer started');
};

function onLoad() {
    observeTitle();

    const pageDriver = PageFilter.findPageType();
    if (pageDriver) {
        init(pageDriver);
        observePage(pageDriver);
    } else {
        log('Page driver not found');
    }
}
