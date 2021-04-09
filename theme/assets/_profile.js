import dialogPolyfill from './dialog-polyfill.esm.js';

function appbarLogin() {
  const openBtn = document.querySelector("#appbar-login-btn");
  const dialog = document.querySelector("#appbar-login-dialog");
  dialogPolyfill.registerDialog(dialog);

  if (!openBtn || !dialog) {
    return;
  }

  openBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  const closeBtn = dialog.querySelector("button.close");
  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
  });
}

appbarLogin();
