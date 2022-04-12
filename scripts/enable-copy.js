chrome.storage.local.get(['copyToggleLogin'], ({ copyToggleLogin }) => {
  if (copyToggleLogin) {
    document.querySelectorAll('#content_views pre code').forEach(element => {
      element.style['-webkit-user-select'] = 'auto'
      element.style['user-select'] = 'auto'
    })
    document.querySelectorAll('#content_views pre').forEach(element => {
      element.style['-webkit-user-select'] = 'auto'
      element.style['user-select'] = 'auto'
    })
  }
})