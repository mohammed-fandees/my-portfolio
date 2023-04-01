import {Send} from "./email.js";

let inputs = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("subject"),
  document.getElementById("msg")
];

let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.querySelector("#send").addEventListener("click", (el) => {
  el.preventDefault();
  if (
    inputs[0].value === "" &&
    !inputs[1].value.match(validRegex) &&
    inputs[3].value === ""
  )
    document
      .querySelectorAll(".sweet-alert")
      .forEach((msg) => (msg.style.cssText = "display: block !important"));
  else
    new Send("service_sbzm0y9", "template_yj9dach", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("msg").value,
    }).send();
});

// save inputs in sesstion storage

class Storage {
  constructor(inputs) {
    this.inputs = inputs;
  }

  save() {
    this.inputs.forEach((input) => {
      input.addEventListener("input", (_) => {
        sessionStorage.setItem(input.getAttribute("name"), input.value);
      });

      input.value = sessionStorage.getItem(input.getAttribute("name"));
    });
  }
}

new Storage(inputs).save();