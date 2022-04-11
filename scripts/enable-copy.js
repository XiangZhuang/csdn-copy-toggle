window.onload = () => {
  document.querySelectorAll('#content_views pre code').forEach(element => {
    element.style['-webkit-user-select'] = 'auto'
    element.style['user-select'] = 'auto'
  })
  document.querySelectorAll('#content_views pre').forEach(element => {
    element.style['-webkit-user-select'] = 'auto'
    element.style['user-select'] = 'auto'
  })
}