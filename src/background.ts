chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url && changeInfo.url.includes('linkedin.com/feed')) {
        chrome.tabs.sendMessage(tabId, {
            message: 'enteredFeed',
            url: changeInfo.url,
        });
    }
});
