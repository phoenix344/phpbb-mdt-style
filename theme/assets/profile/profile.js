const dropdownTrigger = document.querySelector("#profile-dropdown");
if (dropdownTrigger) {
  dropdownTrigger.addEventListener("click", (event) => {
    event.preventDefault();
  });
}

const form = document.querySelector(".loginform");
if (form) {
  form.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

