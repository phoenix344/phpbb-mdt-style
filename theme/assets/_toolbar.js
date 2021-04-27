
/**
 * handle behavior of horizontal icon toolbars
 */

const expandableClass = 'mdt-toolbar-expandable';
const buttons = document.querySelectorAll('.mdt-toolbar-toggle');
const activeToolbar = new Set();
buttons.forEach(button => {
  const menu = button.nextElementSibling;
  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    if (menu.classList.contains(expandableClass)) {
      menu.classList.remove(expandableClass);
    } else {
      menu.classList.add(expandableClass);
      activeToolbar.add([menu, button]);
      button.setAttribute('hidden', true);
    }
  });
});

document.addEventListener('click', () => {
  for (const [menu, button] of activeToolbar.values()) {
    menu.classList.remove(expandableClass);
    setTimeout(() => button.removeAttribute('hidden'), 50);
  }
  activeToolbar.clear();
});
