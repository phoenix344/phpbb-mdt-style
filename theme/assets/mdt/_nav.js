
document.querySelectorAll('[aria-expanded]').forEach(element => {

  const toggleElement = () => {
    const expanded = element.getAttribute('aria-expanded') === 'true';
    element.setAttribute('aria-expanded', (!expanded).toString());
  }

  element.addEventListener('click', () => {
    toggleElement();
  });

  element.addEventListener('keyup', ev => {
    if (ev.key === 'Enter') {
      toggleElement();
    }
  });
});
