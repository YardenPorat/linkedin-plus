import { observeTitle } from './components/observeTitle';
import { PageFilter } from './pages';
import { getLogger } from './components/logger';

const log = getLogger(['main.ts']);

window.onload = onLoad;
chrome.runtime.onMessage.addListener(function (request) {
    if (request.message === 'enteredFeed') {
        log('Enter feed from another section in linkedIn');
        onLoad();
    }
});

function onLoad() {
    observeTitle();

    const pageDriver = PageFilter.findPageType();
    if (pageDriver) {
        pageDriver.observePage();
    } else {
        log('Page driver not found');
    }
}
