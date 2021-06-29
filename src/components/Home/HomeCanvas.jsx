import React from "react";
import Particles  from "react-particles-js";
import particleConfig from "../../config/particle-config";

function HomeCanvas() {
  return (
    <Particles params={particleConfig}></Particles>
  );
}

export default HomeCanvas;
