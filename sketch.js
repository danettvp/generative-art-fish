// https://www.youtube.com/watch?v=04omUmiwCAE&lc=UgwXpnzmsjM3M3OdGFJ4AaABAg

let r = 40;    // Radius of starting cirlce
let dr = 0.1;    // Amount r increases each rotation
let th = 0;    // Starting rotation
let dth = 0.01; // Rotation each incremend of for loop

function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(281, 261, 249);
  translate(width/2, height/2)
  
  noFill()
  strokeWeight(0.1)
  
  beginShape()
  for(let i = 0; i < 101700; i++){
    r += (dr + i/100000) * dth/(2*PI);
    th += dth;
    
    // Position of spiral
    let x = r*cos(th);
    let y = r*sin(th);
    
    // let m = sqrt(x**2 + y**2); // Magnitude
    
    // Angle of noise field vector
    let d = 100;
    let phi = noise(x/d,y/d) * (2*PI);
    
    // Magnitude of noise field vector
    let v = ((r-40)**1.5)/10;
    
    // dr += 0.01;
    
    vertex(
      x + v*cos(phi) + r*cos(i/10000)*i/1000000, 
      y + v*sin(phi) + r*sin(i/10000)*i/1000000
    )
  }
  endShape()
  
  // console.log(exp(200))
  
  noLoop()
  
}

// function mousePressed(){
//   r = 40;
//   th = 0;
//   loop();
// }

function mouseReleased(){
  r = 40;
  th = 0;
  loop();
}