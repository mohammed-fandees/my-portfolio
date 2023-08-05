import "./portfolio.css";
import { Title } from "../../components";
import { IoGitNetwork as Work } from "react-icons/io5";
import { FaCodeBranch as Branch } from "react-icons/fa6";
import { BsFillPlayFill as Play } from "react-icons/bs";
import { works, title } from "./data";

export default function Portfolio() {
  return (
    <main className="portfolio">
      <Title content={title} />
      <div className="container">
        <div className="row justify-content-center mb-4">
          {works.map((work) => {
            return (
              <div key={work.id} className="col-xl-4 col-md-6 flex-column">
                <div className="work d-flex rounded-3 overflow-hidden mb-4">
                  <div className="icon text-center m-transition">
                    <Work />
                  </div>
                  <div className="text p-4 w-100 d-flex flex-column">
                    <h3 className="mb-3 p-2 m-transition">{work.title}</h3>
                    <p>{work.desc}</p>
                    <div className="links d-flex justify-content-end align-items-end">
                      {work.source ? (
                        <a className="m-transition" target="_blank" rel="noreferrer" href={work.source}>
                          <span>
                            <Branch /> Code
                          </span>
                        </a>
                      ) : null}
                      {work.live ? (
                        <a className="m-transition" target="_blank" rel="noreferrer" href={work.live}>
                          <span>
                            <Play /> Live
                          </span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
