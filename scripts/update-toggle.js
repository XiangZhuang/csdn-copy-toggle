window.onload = () => {
  chrome.storage.local.get(['copyToggleLogin', 'copyToggleCopyright'], ({ copyToggleLogin, copyToggleCopyright }) => {
    if (copyToggleLogin) {
      const toggleBar = document.getElementById('login')
      toggleBar.classList.add('enabled')
    }
    if (copyToggleCopyright) {
      const toggleBar = document.getElementById('copyright')
      toggleBar.classList.add('enabled')
    }
  })
}

const triggerToggle = (key) => {
  const toggleBar = document.getElementById(key)
  if (toggleBar.classList.contains('enabled')) {
    chrome.storage.local.set({ [getToggleKey(key)]: false })
    toggleBar.classList.remove('enabled')
  } else {
    chrome.storage.local.set({ [getToggleKey(key)]: true })
    toggleBar.classList.add('enabled')
  }
}

const getToggleKey = (key) => 'copyToggle' + key.charAt(0).toUpperCase() + key.slice(1);

document.getElementById("login").addEventListener("click", () => triggerToggle('login'));
document.getElementById("copyright").addEventListener("click", () => triggerToggle('copyright'));