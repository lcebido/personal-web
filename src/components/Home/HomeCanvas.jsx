import React, { useEffect, useRef } from "react";

const Canvas = React.forwardRef((props, ref) => <canvas ref={ref} />);
var w = Canvas.width = window.innerWidth;
var h = Canvas.height = window.innerHeight;
//     ctx = c.getContext( '2d' ),
    
var opts = {
      
      len: 20,
      count: 50,
      baseTime: 10,
      addedTime: 10,
      dieChance: .05,
      spawnChance: 1,
      sparkChance: .1,
      sparkDist: 10,
      sparkSize: 2,
      
      color: 'hsl(hue,100%,light%)',
      baseLight: 50,
      addedLight: 10, // [50-10,50+10]
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: .01,
      addedLightInputMultiplier: .02,
      
      cx: w / 2,
      cy: h / 2,
      repaintAlpha: .04,
      hueChange: .1
    };
    
var tick = 0;
var lines = [];
var dieX = w / 2 / opts.len;
var dieY = h / 2 / opts.len;

var baseRad = Math.PI * 2 / 6;

function draw(ctx) {
  const canvas = ctx.canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //ctx.fillStyle = "#bada55";
  //ctx.fillRect(0, 0, canvas.width, canvas.height);



  //let line = new Line(tick, opts, lines, dieX, dieY, baseRad);
  //circle.draw(ctx);
  // if( lines.length < opts.count && Math.random() < opts.spawnChance ){
  //   lines.push( line );
  // }
  //line.draw(ctx);
  //lines.map( function( line ){ line.step(ctx); } );



  requestAnimationFrame(() => draw(ctx));
}

  class Line {
    constructor(tick, opts, lines, dieX, dieY, baseRad){
      this.tick = tick;
      this.opts = opts;
      this.lines = lines;
      this.dieX = dieX;
      this.dieY = dieY;
      this.baseRad = baseRad;
    }
    draw(ctx){
      // context.beginPath();
      // context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
      // context.strokeStyle = 'red';
      // context.fillStyle = this.color;
      // context.fill();
      // context.stroke();
      // context.closePath();
      ++tick;
      console.log("DRAW",);
      ctx.globalCompositeOperation = 'source-over';
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', opts.repaintAlpha );
      ctx.fillRect( 0, 0, w, h );
      ctx.globalCompositeOperation = 'lighter';
      this.step(ctx)

      
      ///lines.map( function( line ){ line.step(ctx); } );
    }
    Line(){
      
      this.reset();
    }

    reset(){
      this.x = 0;
      this.y = 0;
      this.addedX = 0;
      this.addedY = 0;
      
      this.rad = 0;
      
      this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
      
      this.color = opts.color.replace( 'hue', tick * opts.hueChange );
      this.cumulativeTime = 0;
      
      this.beginPhase();
    }
    beginPhase(){
  
      this.x += this.addedX;
      this.y += this.addedY;
      
      this.time = 0;
      this.targetTime = ( opts.baseTime + opts.addedTime * Math.random() ) |0;
      
      this.rad += baseRad * ( Math.random() < .5 ? 1 : -1 );
      this.addedX = Math.cos( this.rad );
      this.addedY = Math.sin( this.rad );
      
      if( Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY )
        this.reset();
    }

    step(ctx) {
 
      ++this.time;
      ++this.cumulativeTime;
      
      if( this.time >= this.targetTime )
        this.beginPhase();
      
      var prop = this.time / this.targetTime,
          wave = Math.sin( prop * Math.PI / 2  ),
          x = this.addedX * wave,
          y = this.addedY * wave;
      
      ctx.shadowBlur = prop * opts.shadowToTimePropMult;
      //ctx.fillStyle = ctx.shadowColor = this.color.replace( 'light', opts.baseLight + opts.addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
      ctx.fillRect( opts.cx + ( this.x + x ) * opts.len, opts.cy + ( this.y + y ) * opts.len, 2, 2 );
      
      if( Math.random() < opts.sparkChance )
        ctx.fillRect( opts.cx + ( this.x + x ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.cy + ( this.y + y ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize )
    }
  }

 

// function background(ctx){
//   ctx.fillStyle = "white";
//   ctx.font = "50px sans-serif";
//   ctx.fillText("Profile", ctx.canvas.width / 2 - 100, ctx.canvas.height / 2, 200);

//   ctx.beginPath();
//   ctx.arc(100, 100, 50, 0, 2 * Math.PI);
//   ctx.strokeStyle = "grey";
//   ctx.fillStyle = "salmon";
//   ctx.fill();
//   ctx.stroke();
//   ctx.closePath();
// }

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
