import "./_colormode.js";
import "./_profile.js";
import "./_toolbar.js";
import "./_poll.js";

// Add transition to drawer when page is actually loaded.
window.addEventListener('load', () => {
  const drawer = document.querySelector('.mdl-layout__drawer');
  drawer.classList.add('pbb-drawer-delayed-transition');
});
