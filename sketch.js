let r = 0.5;    // starting radius
let dr = 0.8;   // radius increment
let th = 0;     // starting rotation
let dth = 0.05; // rotation increment

// colour variables
let rCol, gCol, bCol;

function setup() {
  createCanvas(600, 400);
  strokeWeight(0.5);
  noFill();

  // initial random colour
  rCol = random(255);
  gCol = random(255);
  bCol = random(255);
}

function draw() {
  background(281, 261, 249);
  translate(width/2, height/2);

  stroke(rCol, gCol, bCol); // apply colour

  let rTemp = r;
  th = 0;

  beginShape();
  let len = 8000;

  for (let i = 0; i < len; i++) {

    rTemp += (dr + i/10000) * dth/(2*PI);
    th += dth;

    let x = rTemp * cos(th);
    let y = rTemp * sin(th) * 0.4; // flattened spiral

    // noise movement
    let phi = noise(x/100, y/100, frameCount*0.005) * TWO_PI;
    let v = ((rTemp-20)**1.2)/5;

    if (i % 3 === 0) {
      vertex(
        x + v*cos(phi) + sin(i/1000 + frameCount*0.01)*10,
        y + v*sin(phi) + cos(i/1200 + frameCount*0.01)*10
      );
    }
  }

  endShape();
}

function mouseReleased(){
  r = 0.1;

  // new random colour
  rCol = random(255);
  gCol = random(255);
  bCol = random(255);
}