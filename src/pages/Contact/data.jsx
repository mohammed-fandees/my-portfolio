import name from "../../images/icon-name.png";
import location from "../../images/icon-location.png";
import phone from "../../images/icon-phone.png";
import email from "../../images/icon-email.png";

const title = {
  id: "contact",
  title: "contact",
  customize: "me",
  subtitle: "get",
  subcustomize: "in touch",
};

const rows = [
  [
    {
      id: "user-name",
      width: 6,
      type: "text",
      placeholder: "Name",
      name: "name",
      valid: "Nice Name :)",
      invalid: "Realy! You have no name?",
    },
    {
      id: "user-email",
      width: 6,
      type: "email",
      name: "email",
      placeholder: "Email",
      valid: "Nice Email :)",
      invalid: "Come on write your email",
    },
  ],
  [{ id: "subject", width: 12, type: "text", name: "subject", placeholder: "Subject" }],
  [
    {
      id: "message",
      width: 12,
      type: "textarea",
      name: "message",
      placeholder: "Message",
      valid: "Thank You 😍",
      invalid: "Come on!",
    },
  ],
];

const details = [
  {
    id: "details-name",
    title: "Name",
    subtitle: "Mohammed Fandees",
    icon: name,
  },
  {
    id: "details-location",
    title: "Location",
    subtitle: "Menofia, Egypt",
    icon: location,
  },
  {
    id: "details-call",
    title: "Call",
    subtitle: "+20 106 485 7869",
    icon: phone,
  },
  {
    id: "details-email",
    title: "Email",
    subtitle: "mohammed.fandees@gmail.com",
    icon: email,
  },
];

export { title, rows, details };
