chrome.storage.local.get(['copyToggleCopyright'], ({ copyToggleCopyright }) => {
  if (copyToggleCopyright) {
    document.addEventListener('copy', (e) => {
      e.clipboardData.setData('text/plain', window.getSelection().toString());
      e.preventDefault();
    });
  }
})