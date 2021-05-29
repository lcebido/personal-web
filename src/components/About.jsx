import React from "react";
import PersonalProfile from "./aboutme/PersonalProfile";
import Experience from "./aboutme/Experience";
import Skills from "./aboutme/Skills";


function About() {
  return (
    <div id='about' className="container-section">
      <PersonalProfile />
       <Skills />
      <Experience />
    </div>
  );
}

export default About;
