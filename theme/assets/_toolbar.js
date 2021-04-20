
/**
 * handle behavior of horizontal icon toolbars
 */

const expandableClass = 'mdt-toolbar-expandable';
const buttons = document.querySelectorAll('.mdt-toolbar-toggle');
const activeMenus = new Set();
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
      activeMenus.add(menu);
    }
  });
});

document.addEventListener('click', () => {
  for (const menu of activeMenus.values()) {
    menu.classList.remove(expandableClass);
  }
  activeMenus.clear();
});
