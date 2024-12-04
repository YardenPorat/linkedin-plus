import { PageFilter } from './pages';
import { log } from './components/logger';

window.onload = onLoad;
chrome.runtime.onMessage.addListener(function (request) {
    if (request.message === 'enteredFeed') {
        log.message('Enter feed from another section in linkedIn');
        onLoad();
    }
});

function onLoad() {
    PageFilter.init();
}
