import { log } from './components/logger';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    if (changeInfo.url && changeInfo.url.includes('linkedin.com/feed')) {
        chrome.tabs
            .sendMessage(tabId, {
                message: 'enteredFeed',
                url: changeInfo.url,
            })
            .catch((e) => {
                log.error(e.message);
            });
    }
});
