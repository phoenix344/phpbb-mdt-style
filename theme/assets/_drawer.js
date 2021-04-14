
// Add transition to drawer when page is actually loaded.
window.addEventListener('load', () => {
  const drawer = document.querySelector('.mdl-layout__drawer');
  drawer.classList.add('mdt-drawer-delayed-transition');
});

// On resize the drawer appears to rerender and
// interrupts the view. So let's take care of it!

let rtime;
let timeout = false;
const delta = 200;

// On the start of the resize event the transition
// class will be removed.
window.addEventListener('resize', () => {
  rtime = new Date();
  if (timeout === false) {
    timeout = true;
    const drawer = document.querySelector('.mdl-layout__drawer');
    drawer.classList.remove('mdt-drawer-delayed-transition');
    setTimeout(resizeend, delta);
  }
});

// After a delay of 200ms the transition class will be
// added again to the drawer element.
function resizeend() {
  if (new Date() - rtime < delta) {
    setTimeout(resizeend, delta);
  } else {
    timeout = false;
    const drawer = document.querySelector('.mdl-layout__drawer');
    drawer.classList.add('mdt-drawer-delayed-transition');
  }
}
