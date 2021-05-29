import React, { useEffect, useRef } from "react";

const Canvas = React.forwardRef((props, ref) => <canvas ref={ref} />);

function draw(ctx) {
  const canvas = ctx.canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#bada55";
  ctx.fillRect(0, 0, canvas.width, canvas.height);



  background(ctx);
  let circle = new Circle(200, 200, 100, 'pink');
  circle.draw(ctx);



  requestAnimationFrame(() => draw(ctx));
}

  class Circle {
    constructor(xpoint, ypoint, radius, color){
      this.xpoint = xpoint;
      this.ypoint = ypoint;
      this.radius = radius;
      this.color = color;
    }
    draw(context){
      context.beginPath();
      context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
      context.strokeStyle = 'red';
      context.fillStyle = this.color;
      context.fill();
      context.stroke();
      context.closePath();
    }

  }

 

function background(ctx){
  ctx.fillStyle = "white";
  ctx.font = "50px sans-serif";
  ctx.fillText("Profile", ctx.canvas.width / 2 - 100, ctx.canvas.height / 2, 200);

  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "salmon";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function HomeCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    requestAnimationFrame(() => draw(ctx));

    const handleResize = (e) => {
      ctx.canvas.height = window.innerHeight;
      ctx.canvas.width = window.innerWidth;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    ctx.canvas.addEventListener('click', function(event) { 
      console.log("LICK CLICK", event);
    }, false);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  console.log("im being rendered");

  return <Canvas ref={canvasRef} />
}

export default HomeCanvas;
