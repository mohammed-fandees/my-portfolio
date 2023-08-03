import iconOne from "../../images/coding.png";
import iconTwo from "../../images/freelance.png";
import iconThree from "../../images/bulb.png";
import { SiPug } from "react-icons/si";
import { FaKeyboard, FaLinux } from "react-icons/fa6";
import { FiTerminal } from "react-icons/fi";

const title = {
  id: "about",
  title: "about",
  customize: "me",
  subtitle: "get to know",
  subcustomize: "me",
};

const cards = [
  {
    id: "card-one",
    image: iconOne,
    title: "Web Developing",
    text: "I develop websites and make the UI design of the website into an interactive website that can be published on the Internet",
  },
  {
    id: "card-two",
    image: iconTwo,
    title: "Freelancing",
    text: "I work as a freelancer on freelancing sites such as Khamsat, Mostaql and Upwork",
  },
  {
    id: "card-three",
    image: iconThree,
    title: "Creative Design",
    text: "I can give you a fantastic design to embrace as the main look of your website.",
  },
];

const skills = [
  { id: "html", name: "HTML", level: 95 },
  { id: "css", name: "CSS", level: 90 },
  { id: "JavaScript", name: "JavaScript", level: 80 },
  { id: "git", name: "Git & Github", level: 70 },
  { id: "bs", name: "Bootstrap", level: 90 },
  { id: "react", name: "React", level: 75 },
  { id: "figma", name: "Figma", level: 70 },
];

const icons = [
  { id: 1, el: <SiPug />, tooltip: "Pug JS" },
  { id: 2, el: <FaKeyboard />, tooltip: "Touch typing 65 WPM" },
  { id: 3, el: <FaLinux />, tooltip: "Familiar with linux" },
  { id: 4, el: <FiTerminal />, tooltip: "Terminal" },
];

export { title, cards, skills, icons };
