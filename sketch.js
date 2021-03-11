let birds = [];
//let size = 1;

function preload() { 
  img = loadImage("mtn.jpg"); 
} 

function setup() {
  createCanvas(700, 900); 
  frameRate(30);
  for (let i = 0; i < 8; i++) {
    birds.push(new Motion());
  }
}

function draw() {
  image(img, 20, 40, 700, 900);
  for (let i = 0; i < birds.length; i++) {
    birds[i].move();
    birds[i].display();
  }
}

// Jitter class
class Motion {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    noFill();
    stroke(255, 151, 112);
    beginShape();
    for (let i=0; i<1500; i++) {
      
      
      vertex(this.x, this.y);
      
      

      
      this.x += random(-.5, .5);
      this.y += random(-.5, .5);
    }
    endShape();
  }
}
