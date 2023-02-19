const fs = require('fs');
const yaml = require('js-yaml');

try {
    let fileContents = fs.readFileSync('./config.yaml', 'utf8');
    let data = yaml.safeLoad(fileContents);
    console.log(data);
} catch (e) {
    console.log(e);
}

(function () {
  emailjs.init(data.code.privateCode);
})();

const params = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  subject: document.getElementById("subject").value,
  message: document.getElementById("msg").value,
};
const {name: n, emial: e, subject: s, message: m} = params;

function sendMail(serviceID, templateID) {
  emailjs.send(serviceID, templateID, params).then((res) => {
      params.name = "";
      params.email = "";
      params.subject = "";
      params.message = "";
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been sent',
        showConfirmButton: false,
        timer: 2000
      });
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Faild to send',
        text: 'Something went wrong!',
      });
    });
}

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.querySelector("#send")
.addEventListener('click', el => {
  el.preventDefault();
  if (n.value === "" && e.value.match(validRegex) && m.value === "") 
    document.querySelectorAll('.sweet-alert').forEach(msg => msg.style.cssText = 'display: block !important');
  else sendMail(data.code.serviceID, data.code.templateID);
});

// save inputs in sesstion storage

class Storage {
  constructor(inputs) {
    this.inputs = inputs;
  }

  save() {
    this.inputs.forEach(input => {
      input.addEventListener('input', _ => {
        sessionStorage.setItem(input.getAttribute('name'), input.value);
      });
    
      input.value = sessionStorage.getItem(input.getAttribute('name'));
    });
  }
}

new Storage(
  [
    document.querySelector("#name"),
    document.querySelector("#email"),
    document.querySelector("#subject"),
    document.querySelector("#msg")
  ]
).save();