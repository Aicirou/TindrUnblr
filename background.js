
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      chrome.tabs.sendMessage( tabId, {
        action: 'url_changed',
        url: changeInfo.url
      });
    }
  }
);
