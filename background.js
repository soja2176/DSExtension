// This function is to know if the chrome tab is loaded

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url) {
    // Detecta el cambio de URL en Start+ o Disney+
    if (
      changeInfo.url.includes("startplus.com") ||
      changeInfo.url.includes("disneyplus.com")
    ) {
      // Hace pantalla completa en la pestaña activa
      chrome.windows.update(tab.windowId, { state: "fullscreen" });
    }
  }
});
