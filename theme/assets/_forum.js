const buttons = document.querySelectorAll('.pbb-topic-menu-toggle');
const activeMenus = new Set();
buttons.forEach(button => {
  const menu = button.nextElementSibling;
  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    if (menu.classList.contains('pbb-topic-menu-expandable')) {
      menu.classList.remove('pbb-topic-menu-expandable');
    } else {
      menu.classList.add('pbb-topic-menu-expandable');
      activeMenus.add(menu);
    }
  });
});

document.addEventListener('click', () => {
  for (const menu of activeMenus.values()) {
    menu.classList.remove('pbb-topic-menu-expandable');
  }
  activeMenus.clear();
});
