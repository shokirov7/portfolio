import React from "react";
import "./Proj.css";
import volcano from "../../../assets/img/volcano.png";
import travel from "../../../assets/img/travel.png";
import dollar from "../../../assets/img/dollar.png";
import shop from "../../../assets/img/shop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Proj() {
  return (
    <section className="projects" id="projects">
      <div className="projects_content">
        <div className="main_title_section">
          <h3 className="main_mini_title">portfolio</h3>
          <h1 className="main_title">
            Each project is a unique piece of development{" "}
            <img src={volcano} alt="" />
          </h1>
        </div>

        <div className="projects_grid">
          <div className="project">
            <div className="project_block_image first"></div>
            <div className="project_info">
              <h2 className="proj_title">
                Anor Travel <img src={travel} alt="" />
              </h2>
              <p className="proj_desc">
                Anor Travel is the website of a travel agency that provides an
                unforgettable trip. Backend is implemented in this project
              </p>
              <div className="proj_stack">
                <span>React</span>
                <span>SCSS</span>
              </div>
              <div className="proj_links">
                <a
                  href="https://github.com/shokirov7/anor-travel"
                  target="_blank"
                >
                  Code <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://anor-travel.netlify.app/" target="_blank">
                  Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project_block_image second"></div>
            <div className="project_info">
              <h2 className="proj_title">
                Raouf Ecommerce <img src={shop} alt="" />
              </h2>
              <p className="proj_desc">
                With a focus on simplicity and clean design, this store
                prioritize user experience, making it easy for customers to find
                and purchase the products they need.
              </p>
              <div className="proj_stack">
                <span>React</span>
                <span>Firebase</span>
              </div>
              <div className="proj_links">
                <a
                  href="https://github.com/shokirov7/minimalistic-ecommerce"
                  target="_blank"
                >
                  Code <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://shokirov-ecommerce.vercel.app/"
                  target="_blank"
                >
                  Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project_block_image third"></div>
            <div className="project_info">
              <h2 className="proj_title">
                Money Manager <img src={dollar} alt="" />
              </h2>
              <p className="proj_desc">
                Money Manager - empower management, streamline operations,
                control users, curate content, and analyze data seamlessly with
                admin panel
              </p>
              <div className="proj_stack">
                <span>React</span>
                <span>Backend</span>
              </div>
              <div className="proj_links">
                <a
                  href="https://github.com/shokirov7/money-manager"
                  target="_blank"
                >
                  Code <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://money-managger.netlify.app/" target="_blank">
                  Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proj;
