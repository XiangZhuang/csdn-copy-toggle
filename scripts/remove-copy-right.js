document.addEventListener('copy', (e) => {
  e.clipboardData.setData('text/plain', window.getSelection().toString());
  e.preventDefault();
});