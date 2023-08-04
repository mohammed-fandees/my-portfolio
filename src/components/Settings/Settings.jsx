import "./settings.css";
import gear from "../../images/gear.png";
import { useRef, useState } from "react";
export default function Settings() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "#c70039"
  );
  const color = [
    { id: "dark-red", color: "#c70039" },
    { id: "dark-purple", color: "#481380" },
    { id: "dark-teal", color: "#00909e" },
    { id: "dark-green", color: "#04a777" },
    { id: "dark-blue", color: "#035aa6" },
    { id: "orange", color: "#dd7631" },
  ];
  const palit = useRef();

  document.querySelector(":root").style.setProperty("--main-color", theme);

  return (
    <div ref={palit} className="settings position-fixed d-flex">
      <div
        className="icon"
        onClick={() => palit.current.classList.toggle("show-palit")}
      >
        <img src={gear} alt="gear" />
      </div>
      <div className="box">
        <h2 className="m-0 text-center">Custom Colors</h2>
        <ul className="color-palit m-0 p-0 d-grid">
          {color.map((c) => (
            <li
              key={c.id}
              className={c.id}
              style={{ background: c.color }}
              onClick={() => {
                localStorage.setItem("theme", c.color);
                setTheme(localStorage.getItem("theme"));
                document
                  .querySelector(":root")
                  .style.setProperty("--main-color", theme);
              }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
