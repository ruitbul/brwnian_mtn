let birds = [];

let x;

let y;

let timer = 0;

let timer2 = 0;

let mass = 0.6;

let song;

function preload() { 
  song = loadSound("birds.wav");
  img = loadImage("mtn.jpg"); 
} 

function setup() {
  createCanvas(600, 700);
  song.loop(); 

  // x = random(width);
  // y = random(height);
  
  for (let i = 0; i < 8; i++) {
    birds.push(new Motion());
  }
}

function draw() {
  image(img, 0, 0, 600, 700);
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
    // this.newX = 0;
    // this.newY = 0;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    noFill();
    stroke(255, 151, 112);
    
    if(timer < 2000){
      timer ++;
      }

      if(timer2 < 4000){
        timer2 ++;
      }

      let newX = map(timer, 0, 2000, this.x, width/2 + random(20)); //+ random(10));
      let newY = map(timer, 0, 2000, this.y, height/2 - 100 + random(20));//+random(10));
    
    beginShape();
    for (let i=0; i<1500; i++) {
      
      
      vertex(newX, newY);
      
      

      mass = map(timer2, 0, 4000, 0.6, 0.001);
      newX += random(-mass, mass);
      newY += random(-mass, mass);
    }
    endShape();
  }
}

//test