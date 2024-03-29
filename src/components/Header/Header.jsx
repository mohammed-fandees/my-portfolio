import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { FaBars as Bars } from "react-icons/fa6";
import { useRef, useState } from "react";
export const getPath = (path) => path ? path : window.location.pathname;

export default function Header() {
  const [path, setPath] = useState(window.location.pathname);
  const links = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Contact", path: "/contact" },
  ];

  const menu = useRef();
  return (
    <nav className={`${path.slice(1)} navbar navbar-expand-lg position-fixed top-0 w-100`}>
      <div className="container">
        <Link 
          to="/" className="navbar-brand"   
          onClick={() => {
            setPath(getPath("/"));
            menu.current.classList.remove("show");
          }}
          >
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Bars />
        </button>
        <div ref={menu} className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => {
              return (
                <li key={link.text} className="nav-item">
                  <Link
                    to={link.path}
                    onClick={() => {
                      setPath(getPath(link.path));
                      menu.current.classList.remove("show");
                    }}
                    className={`${link.path === path ? "active" : ""} nav-link py-2 px-3 text-white`}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
