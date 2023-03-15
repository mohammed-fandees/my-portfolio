import {Send} from "./email.js";

let inputs = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("subject"),
  document.getElementById("msg"),
];

// Sweet alert

// class Sweet {
//   constructor(alert, inputs) {
//     this.alert = alert;
//     this.inputs = inputs;
//   }

//   alertFunction() {
//     let tarInput;
//     this.inputs.forEach(el => {
//       el.addEventListener("blur", function() {
//         tarInput = this.getAttribute('id');
//         console.log(this.alert.name);
//         let targetAlert = this.alert[`${tarInput}`];
//         targetAlert.style.display = "block";
//       });
//     });
//   }
// }

// let sweetAlert = new Sweet({
//   name: document.querySelectorAll(".sweet-alert")[0],
//   email: document.querySelectorAll(".sweet-alert")[1],
//   msg: document.querySelectorAll(".sweet-alert")[2],
// },inputs);

// inputs.forEach((el) => {
//   el.addEventListener("blur", function () {
//     if (this.value == "") sweetAlert.alertFunction();
//     else console.log(true);
//   });
// });

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