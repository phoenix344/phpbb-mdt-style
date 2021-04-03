import { timeout } from "../utils/timeout.js";

document.addEventListener("keyup", (ev) => {
  const overlay = document.querySelector("#mui-overlay");
  if (overlay && ev.key === "Escape") {
    onDrawerClose(overlay).catch(console.error);
  }
});

const drawerTriggers = document.querySelectorAll('[data-toggle="drawer"]');
drawerTriggers.forEach((drawerTrigger) => {
  drawerTrigger.addEventListener("click", function () {
    onDrawerOpen(this.dataset.target).catch(console.error);
  });
});

async function onDrawerOpen(target) {
  if (target) {
    const drawer = document.querySelector(target);
    drawer.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    const overlay = mui.overlay(
      "on",
      {
        static: true,
        keyboard: false,
      },
      drawer
    );

    overlay.addEventListener("click", () => {
      onDrawerClose(overlay).catch(console.error);
    });

    drawer.style.display = "block";

    await timeout();

    drawer.classList.add("drawer-active");
  }
}

async function onDrawerClose(overlay) {
  if (overlay) {
    const drawer = overlay.firstChild;

    drawer.classList.remove("drawer-active");
    overlay.classList.add("overlay-fade-out");

    await timeout(250);

    drawer.style.display = "none";
    document.body.appendChild(drawer);

    mui.overlay("off");
  }
}
