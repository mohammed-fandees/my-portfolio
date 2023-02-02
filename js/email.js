// Send Mail

(function () {
  emailjs.init("07Nn38ayRbgjjo0R2");
})();

let send = document.querySelector("#send");

function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("msg").value,
  };
  
  let serviceID = "service_sbzm0y9";
  let templateID = "template_yj9dach";
  
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

// save inputs in sesstion storage

const inputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  subject: document.querySelector("#subject"),
  message: document.querySelector("#msg"),
};
const {name: n, email: e, subject: s, message: m} = inputs;

n.oninput = _ => sessionStorage.setItem("name", n.value);
e.oninput = _ =>
  sessionStorage.setItem("email", e.value);
s.oninput = _ =>
  sessionStorage.setItem("subject", s.value);
m.oninput = _ =>
  sessionStorage.setItem("message", m.value);

n.value = sessionStorage.getItem("name");
e.value = sessionStorage.getItem("email");
s.value = sessionStorage.getItem("subject");
m.value = sessionStorage.getItem("message");


let sweetAlert = document.querySelectorAll('.sweet-alert');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

send.onclick = (el) => {
  el.preventDefault();

  sweetAlert.forEach(msg => {
    
  });

  if (n.value === "" && e.value.match(validRegex) && m.value === "") {
    sweetAlert.forEach(msg => msg.style.cssText = 'display: block !important');
  } else {
    sendMail();
  }
};