const search = document.querySelector('#search');
if (search) {
  search.addEventListener('click', event => {
    event.stopPropagation();
  });
}
