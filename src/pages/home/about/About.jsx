import React from "react";
import "./About.css";
import location from "../../../assets/img/location.png";
import boy from "../../../assets/img/boy.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about_content">
        <div className="about_left">
          <div className="about_img"></div>
          <div className="about_circle">
            <div className="circle_text"></div>
            <div className="circle_img">
              <img src={boy} alt="" />
            </div>
          </div>
        </div>
        <div className="about_right">
          <h3 className="about_title--mini">About me</h3>
          <h1 className="about_title">
            A dedicated Front-end Developer based in Fergana, Uzbekistan <img src={location} alt="" />
          </h1>
          <p className="about_desc">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in JavaScript, React, TypeScript, Tailwind, HTML, CSS and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
