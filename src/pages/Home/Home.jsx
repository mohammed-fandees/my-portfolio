import "./home.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { options } from "./particles-options";
import List from "./List";
import Typewriter from "typewriter-effect";
import { social, contact } from "./data";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <main className="home d-flex justify-content-center align-items-center flex-column">
      <List
        className="social position-absolute m-0 p-0 d-flex gap-4"
        arr={social}
      />
      <List
        className="contact position-absolute m-0 p-0 d-flex flex-column gap-4"
        arr={contact}
      />
      <Particles options={options} init={particlesInit} />
      <h1 className="text-white text-center fw-bolder px-3">
        <span className="name m-transition">Mohammed</span> Fandees
      </h1>

      <div className="typewrite-p text-white m-transition">
        I am
        <Typewriter
          options={{
            strings: [" React Developer.", " Freelancer."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </main>
  );
}
