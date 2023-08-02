import "./list.css";
import {
  FaInstagram as Instagram,
  FaFacebookF as Facebook,
  FaLinkedinIn as Linkedin,
  FaTwitter as Twitter,
} from "react-icons/fa6";
import { RiSendPlaneFill as Email } from "react-icons/ri";
import {
  BsFillTelephoneFill as Phone,
  BsGithub as Github,
} from "react-icons/bs";

export default function List(props) {
  const { arr, className } = props;

  return (
    <ul className={`social-list ${className}`}>
      {arr.map((li) => {
        const iconType =
          li.id === "instagram" ? (
            <Instagram />
          ) : li.id === "facebook" ? (
            <Facebook />
          ) : li.id === "github" ? (
            <Github />
          ) : li.id === "linkedin" ? (
            <Linkedin />
          ) : li.id === "twitter" ? (
            <Twitter />
          ) : li.id === "email" ? (
            <Email />
          ) : li.id === "phone" ? (
            <Phone />
          ) : null;

        return (
          <li key={li.id}>
            <a target="_blank" rel="noreferrer" href={li.path}>
              {iconType}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
