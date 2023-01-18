// Send Mail

(function () {
  emailjs.init("07Nn38ayRbgjjo0R2");
})();

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
  const {name: n, email: e, subject: s, message: m} = params;

  let serviceID = "service_sbzm0y9";
  let templateID = "template_yj9dach";

  emailjs.send(serviceID, templateID, params).then((res) => {
      n = "";
      e = "";
      s = "";
      m = "";
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
