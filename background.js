// URL Start+ and Disney+
const startPlusUrl = "starplus.com";
const disneyPlusUrl = "disneyplus.com";

// Listener to detect changes in the tab
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // check if the URL has changed
  if (changeInfo.url) {
    // check if the URL is from Start+ or Disney+
    if (
      changeInfo.url.includes(startPlusUrl) ||
      changeInfo.url.includes(disneyPlusUrl)
    ) {
      // make full screen in the active tab
      chrome.windows.update(tab.windowId, { state: "fullscreen" });
    }
  }
});