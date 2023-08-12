import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menu, setMenu] = useState(false);
  console.log(menu);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className="navbar">
      <section className="nav_content">
        <Link
          onClick={closeMenu}
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav_logo"
        >
          Amir.dev
        </Link>
        <div className={menu ? "nav_links active" : "nav_links"}>
          <Link
            onClick={closeMenu}
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            to="about"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
          >
            About
          </Link>
          <Link
            onClick={closeMenu}
            to="projects"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Projects
          </Link>
          <Link
            onClick={closeMenu}
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
          <div
            onClick={() => {
              setMenu(false);
            }}
            className="nav_menu_close"
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div
          onClick={() => {
            setMenu(true);
          }}
          className={menu ? "nav_menu active" : "nav_menu"}
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
