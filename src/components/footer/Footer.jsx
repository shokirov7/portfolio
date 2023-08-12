import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <nav className="footer">
      <div className="footer_content">
        <h1 className="footer_title">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className="footer_links">
          <a target="_blank" href="https://www.linkedin.com/in/amirxon-shokirov-90a34a268/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a target="_blank" href="https://github.com/shokirov7">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
