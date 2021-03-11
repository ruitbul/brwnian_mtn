
let img; 
let speed = 0.2;

  
function preload() { 
  img = loadImage("mtn.jpg"); 
} 
  
function setup() { 
  createCanvas(700, 900); 
  frameRate(15);
  
  image(img, 20, 40, 700, 900); 
    
    //noLoop();


} 

function draw() {
 
    // let x = width/2;
    // let y = height/2;
  
  startBrownian(132, 187);
  startBrownian.move();
  startBrownian(150, 250);
  startBrownian(523, 135);
  startBrownian(543, 305);

    print("X: "+mouseX, 0, height/4);
     print("Y: "+mouseY, 0, height/2);
}
function startBrownian(x,y){
  noFill();
    stroke(255, 151, 112);
    beginShape();
    for (let i=0; i<1500; i++) {
      
      
      vertex(x, y);
      
      

      
      x += random(-speed, speed);
      y += random(-speed, speed);
    }
    endShape();
}

