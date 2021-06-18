import React from "react";
import Particles  from "react-particles-js";
import particleConfig from "../../config/particle-config";

//const Canvas = React.forwardRef((props, ref) => <canvas ref={ref} />);

// function draw(ctx) {
//   const canvas = ctx.canvas;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   //ctx.fillStyle = "#bada55";
//   //ctx.fillRect(0, 0, canvas.width, canvas.height);

//   //let line = new Line(tick, opts, lines, dieX, dieY, baseRad);
//   //circle.draw(ctx);
//   // if( lines.length < opts.count && Math.random() < opts.spawnChance ){
//   //   lines.push( line );
//   // }
//   //line.draw(ctx);
//   //lines.map( function( line ){ line.step(ctx); } );


//   requestAnimationFrame(() => draw(ctx));
// }


function HomeCanvas() {
// const canvasRef = useRef();

  // useEffect(() => {
  //   const ctx = canvasRef.current.getContext("2d");
  //   requestAnimationFrame(() => draw(ctx));

  //   const handleResize = (e) => {
  //     ctx.canvas.height = window.innerHeight;
  //     ctx.canvas.width = window.innerWidth;
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   ctx.canvas.addEventListener('click', function(event) { 
  //     console.log("LICK CLICK", event);
  //   }, false);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  //return <Canvas ref={canvasRef} />
  return (
    <Particles params={particleConfig}></Particles>
  );
}

export default HomeCanvas;
