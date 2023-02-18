class Dropdown {
  constructor(list, header) {
    this.list = list;
    this.header = header;
  }

  down() {
    this.list.style.cssText = "transform: translateY(0)";
  }

  up() {
    this.list.style.cssText = "transform: translateY(-100%)";
  }

  scroll() {
    if (window.scrollY >= 50) this.header.style.background = "#101010";
    else this.header.style.background = "transparent";
  }
}

let menu = new Dropdown(
  document.querySelector(".list"),
  document.querySelector("header")
);

document
  .querySelector("#dropdown-icon")
  .addEventListener("click", _ => menu.down());
document.querySelector("#close").addEventListener("click", _ => menu.up());

onscroll = _ => menu.scroll();

// Change Color

class Color {
  constructor(settings, root) {
    this.settings = settings;
    this.root = root;
  }

  openSettings() {
    this.settings.classList.toggle("show");
  }

  changeColor() {
    this.root.style.setProperty(
      "--main-color",
      localStorage.getItem("main-color") || "#c70039"
    );
  }
}

let change = new Color(
  document.querySelector(".settings"),
  document.querySelector(":root")
);

onload = change.changeColor();

document
  .querySelector("#gear")
  .addEventListener("click", _ => change.openSettings());
document.querySelectorAll(".settings ul li").forEach((color) =>
  color.addEventListener("click", _ => {
    localStorage.setItem("main-color", color.getAttribute("color"));
    change.changeColor();
  })
);