// Send Mail

let send = document.querySelector("#send");

send.onclick = (el) => {
  el.preventDefault();
  sendMail();
};

function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("msg").value,
  };

  let serviceID = "service_sbzm0y9";
  let templateID = "template_yj9dach";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      params.name = "";
      params.email = "";
      params.subject = "";
      params.message = "";
      console.log(res);
      alert("Your Message send successfully!");
    })
    .catch((err) => console.log(err));
}

// save inputs in sesstion storage

const inputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  subject: document.querySelector("#subject"),
  message: document.querySelector("#msg"),
};

inputs.name.oninput = (_) => sessionStorage.setItem("name", inputs.name.value);
inputs.email.oninput = (_) =>
  sessionStorage.setItem("email", inputs.email.value);
inputs.subject.oninput = (_) =>
  sessionStorage.setItem("subject", inputs.subject.value);
inputs.message.oninput = (_) =>
  sessionStorage.setItem("message", inputs.message.value);

inputs.name.value = sessionStorage.getItem("name");
inputs.email.value = sessionStorage.getItem("email");
inputs.subject.value = sessionStorage.getItem("subject");
inputs.message.value = sessionStorage.getItem("message");
