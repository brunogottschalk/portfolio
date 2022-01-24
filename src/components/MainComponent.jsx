import React from "react";
import { Link } from "react-router-dom";

function MainComponent() {
  return (
    <div className="main-container">
      <section className="section-container">
        <div className="image-container">
          <img
            src="https://ca.slack-edge.com/TMDDFEPFU-U02AMHSEF36-11716c0b61cc-512"
            alt="myself"
          />
        </div>
        <div className="box-container">
          <a href="https://github.com/brunogottschalk/">
            <p>GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/bruno-gottschalk-roque-40ba57216/">
            <p>Linkedin</p>
          </a>
          <Link to="/portfolio/projects">
            <p>Projetos</p>
          </Link>
        </div>
      </section>
      <div className="line-break"></div>
      <p className="email-text">Email: brunogrockque@hotmail.com</p>
    </div>
  );
}

export default MainComponent;
