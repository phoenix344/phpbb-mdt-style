// import './drawer/drawer.js';
import './profile/profile.js';
// import './search/search.js';

// TODO: set this up on ACP
const defaultColorMode = 'light';

const colorModeBtn = document.querySelector('#color-mode-btn');
const root = document.querySelector(':root');

// TODO: Make assumption on color mode by system preferences optional
const systemColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark' : window.matchMedia('(prefers-color-scheme: light)').matches
  ? 'light' : defaultColorMode;

// If system color scheme is changing, the theme is assuming that
// the forum color scheme should fit the system preferences.
if (localStorage.systemColorMode && localStorage.systemColorMode !== systemColorMode) {
  localStorage.removeItem('colorMode');
}

if (localStorage.colorMode) {
  setColorMode(localStorage.colorMode);
} else {
  setColorMode(systemColorMode);
}

localStorage.systemColorMode = systemColorMode;

if (colorModeBtn) {
  colorModeBtn.addEventListener('click', toggleColorMode);
}

function _setColorMode(mode, iconName) {
  if (colorModeBtn) {
    const icon = colorModeBtn.querySelector('.material-icons');
    icon.innerHTML = iconName;
  }
  root.setAttribute('color-mode', mode);
  localStorage.colorMode = mode;
}

function setColorMode(mode) {
  if ('dark' === mode) {
    _setColorMode('dark', 'nightlight_round');
  } else {
    _setColorMode('light', 'wb_sunny');
  }
}

function toggleColorMode() {
  const mode = localStorage.colorMode;
  if (mode === 'dark') {
    setColorMode('light');
  } else {
    setColorMode('dark');
  }
}
