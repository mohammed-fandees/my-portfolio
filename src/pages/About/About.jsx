import { Title } from "../../components";
import "./about.css";
import ServicesCard from "./ServicesCard";
import Progrss from "./Progrss";
import aboutImage from "../../images/about.jpg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {title, icons, cards, skills} from "./data";
import {motion} from "framer-motion"
import { animations } from "../../components/Animations.config";

export default function About() {
  return (
    <motion.main className="about" variants={animations} initial="initial" animate="animate" exit="exit">
      <Title content={title} />
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="text">
              <h3 className="mb-3">
                I'm creative <span className="m-transition">Frontend Developer</span> based in Menofia, EG.
              </h3>
              <p className="mt-3 mb-4">
                With a year of experience as a junior web developer, I have
                acquired the skills and knowledge needed to succeed in your
                project. And I aspire to learn more skills to become a
                professional. And I enjoy every step while working.
              </p>
              <button className="main-button">
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/13Hf-BDvAClA9Ky7sagVD6ICCQLU6AU9L/view?usp=sharing">Download CV</a>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex align-items-center">
            <div className="image">
              <img
                className="w-100 rounded-3"
                src={aboutImage}
                alt="About Me"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Title content={{ title: "my", customize: "services" }} />
          </div>
          {cards.map((card) => (
            <ServicesCard key={card.id} card={card} />
          ))}
        </div>
        <div className="row pb-4">
          <div className="col-12">
            <Title content={{ title: "my", customize: "skills" }} />
          </div>
          {skills.map((skill) => {
            return <Progrss key={skill.id} skill={skill} />;
          })}
        </div>
        <div className="row pb-4">
          {icons.map((icon) => {
           return <div key={icon.id} className="soft-skills col-sm-3 col-6 d-flex justify-content-center">
              <OverlayTrigger
                key={icon.id}
                placement="top"
                overlay={<Tooltip id="tooltip-top">{icon.tooltip}</Tooltip>}
              >
                <span className="overlay-icon">{icon.el}</span>
              </OverlayTrigger>
            </div>;
          })}
        </div>
      </div>
    </motion.main>
  );
}
