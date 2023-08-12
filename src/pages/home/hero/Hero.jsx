import React from "react";
import "./Hero.css";
import hand from "../../../assets/img/hand.png";
import location from "../../../assets/img/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import html from '../../../assets/img/html.svg'
import css from '../../../assets/img/css.svg'
import js from '../../../assets/img/js.svg'
import react from '../../../assets/img/react.svg'
import tail from '../../../assets/img/tail.svg'
import sass from '../../../assets/img/sass.svg'
import ts from '../../../assets/img/ts.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero_content">
        <div className="hero_top">
          <div className="hero_left">
            <h1 className="hero_title">
              Front-End React Developer
              <img src={hand} alt="" />
            </h1>
            <p className="hero_desc">
              Hi, I'm Amirxon Shokirov. A passionate Front-end React Developer
              based in Fergana, Uzbekistan. <img src={location} alt="" />
            </p>
            <div className="hero_links">
              <a href="https://www.linkedin.com/in/amirxon-shokirov-90a34a268/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/shokirov7" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="hero_img"></div>
        </div>
        <div className="hero_stack">
            <h1 className="stack_title">Tech Stack</h1>
            <div className="stack_holder">
                <span title="JavaScript">
                    <img src={js} alt="" />
                </span>
                <span title="React">
                    <img src={react} alt="" />
                </span>
                {/* <span title="TypeScript">
                    <img src={ts} alt="" />
                </span> */}
                <span title="HTML5">
                    <img src={html} alt="" />
                </span>
                <span title="CSS3">
                    <img src={css} alt="" />
                </span>
                <span title="Tailwind CSS">
                    <img src={tail} alt="" />
                </span>
                <span title="SCSS">
                    <img src={sass} alt="" />
                </span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
