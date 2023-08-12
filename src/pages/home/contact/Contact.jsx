import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import down from "../../../assets/img/down.png";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact_content">
        <div className="main_title_section">
          <h3 className="main_mini_title">contact</h3>
          <h1 className="main_title">
            Don't be shy! Hit me up! <img src={down} alt="" />
          </h1>
        </div>
        <div className="contact_holer">
          <div className="contact_block">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <div className="contact_info">
              <h1 className="contact_title">Location</h1>
              <p className="contact_desc">Fergana, Uzbekistan</p>
            </div>
          </div>
          <div className="contact_block">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <div className="contact_info">
              <h1 className="contact_title">Mail</h1>
              <a href="mailto:shokirovamir2006@gmail.com" target="_blank" className="contact_desc">
                shokirovamir2006@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
