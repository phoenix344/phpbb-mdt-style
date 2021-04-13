const defaultColorScheme = _getCssColorScheme();
const colorSchemeBtn = document.querySelector("#color-mode-btn");
const systemColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : defaultColorScheme;

// the forum color scheme should fit the system preferences.
if (
  localStorage.initialColorScheme &&
  localStorage.initialColorScheme !== systemColorScheme
) {
  localStorage.removeItem("colorScheme");
}

if (localStorage.colorScheme) {
  setColorScheme(localStorage.colorScheme);
} else {
  setColorScheme(systemColorScheme);
}

localStorage.initialColorScheme = systemColorScheme;

if (colorSchemeBtn) {
  colorSchemeBtn.addEventListener("click", toggleColorScheme);
}

function toggleColorScheme() {
  const scheme = localStorage.colorScheme;
  if (scheme === "dark") {
    setColorScheme("light");
  } else {
    setColorScheme("dark");
  }
}

function setColorScheme(scheme) {
  if ("dark" === scheme) {
    _setColorScheme("dark", "nightlight_round");
  } else {
    _setColorScheme("light", "wb_sunny");
  }
}

function _setColorScheme(scheme, iconName) {
  if (colorSchemeBtn) {
    const icon = colorSchemeBtn.querySelector(".material-icons");
    icon.innerHTML = iconName;
  }
  _setCssColorScheme(scheme);
  localStorage.colorScheme = scheme;
}

function _getCssColorScheme() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--toggle-color-scheme").trim();
  return raw.slice(1, raw.length - 1);
}

function _setCssColorScheme(scheme) {
  document.documentElement.style.setProperty(
    "--toggle-color-scheme",
    `"${scheme}"`
  );
  document.documentElement.setAttribute('color-scheme', scheme);
}
