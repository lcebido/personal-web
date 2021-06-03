import React from "react";
import PersonalProfile from "./aboutme/PersonalProfile";
import Experience from "./aboutme/Experience";
import Skills from "./aboutme/Skills";
import "../sass/components/About.scss";

function About() {
  return (
    <div id="about">
      <div className="theme-light">
        <PersonalProfile />
      </div>
      <div className="theme-dark">
        <Skills />
      </div>
      <div className="theme-light">
        <Experience />
      </div>
    </div>
  );
}

export default About;
