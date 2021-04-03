const moreBtn = document.querySelector("#profile-dropdown > .more-btn");
if (moreBtn) {
  moreBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log('prevented');
  });
}

const form = document.querySelector(".loginform");
if (form) {
  form.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

