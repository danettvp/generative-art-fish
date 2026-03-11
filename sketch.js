let t = 0;

function setup() {
  createCanvas(600, 400);
  stroke(255);
  noFill();
}

function draw() {
  background(20);
  translate(width/2, height/2);

  strokeWeight(1);

  beginShape();
  for (let i = 0; i < 400; i++) {

    let a = i * 0.05;
    let r = 120 * sin(a * 0.5);

    let x = r * cos(a + t);
    let y = r * sin(a);

    vertex(x, y);
  }
  endShape();

  t += 0.01;
}