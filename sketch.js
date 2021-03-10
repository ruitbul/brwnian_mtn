
let img; 
let speed = 0.4;
  
function preload() { 
  img = loadImage("mtn.jpg"); 
} 
  
function setup() { 
  createCanvas(700, 900); 
  frameRate(60);
  
  image(img, 20, 40, 700, 900); 
    filter(BLUR, 2);
    //noLoop();


} 

function draw() {
 // background(193, 251, 164);
  
    // start in center of screen
    let x = width/2;
    let y = height/2;
  
    // draw a long line, updating the x/y position
    // by a random amount each step
    fill(255, 151, 112);
    noStroke();
    beginShape();
    for (let i=0; i<500; i++) {
      
      // draw a vertex at the current x/y position
      vertex(x, y);
      
      // try this instead of the line above!
      // curveVertex(x, y);

      // move by a random amount left/right and up/down
      x += random(-speed, speed);
      y += random(-speed, speed);
    }
    endShape();
    x = 200;
    y = 200;
  
    // draw a long line, updating the x/y position
    // by a random amount each step
    fill(255, 151, 112);
    noStroke();
    beginShape();
    for (let i=0; i<500; i++) {
      
      // draw a vertex at the current x/y position
      vertex(x, y);
      
      // try this instead of the line above!
      // curveVertex(x, y);

      // move by a random amount left/right and up/down
      x += random(-speed, speed);
      y += random(-speed, speed);
    }
    endShape();

    print("X: "+mouseX, 0, height/4);
    print("Y: "+mouseY, 0, height/2);
}


