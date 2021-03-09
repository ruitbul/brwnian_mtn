//let capture


//let pedal = 5;
let tiles;
let tileSize;

let img; // Declare variable 'img'.

function setup(){
  createCanvas(400, 400, WEBGL);
   img = loadImage('kingkrule.jpg');
   img.resize(400, 400);
  //MidiBus.list();
  //myBus = new MidiBus(this, "Teensy MIDI", -1);
    //video = new Capture(this, 640, 480, 10);
 // capture = createCapture(VIDEO);
  //capture.size(640, 480);
  //navigator.requestMIDIAccess()
//   .then(function(access) {

//      // Get lists of available MIDI controllers
//      const inputs = access.inputs.values();
//      const outputs = access.outputs.values();

//      access.onstatechange = function(e) {

//        // Print information about the (dis)connected MIDI controller
//        console.log(e.port.name, e.port.manufacturer, e.port.state);
//      };
//   });
}

function mousePressed() {
}

function draw() {
  
  background(220);
  //translate(width/2, height/2);
  //image(img, 0, 0);
  //image(img, 0, height / 2, img.width / 2, img.height / 2);
  //image(capture, -width/2, -height/2, 320, 240)
  //filter(GRAY);
  fill(0);
  noStroke();
  

  
  
  //let tiles = pedal;
  //tiles = map(mouseX, 0, 127, 0, width/2);
  tiles = mouseX/10
  tileSize = width/tiles;
  
  push();
  //translate(width/2, height/2);
  //rotateY(radians(frameCount));
  for (x = 1; x <tiles; x++) {
    for ( y = 1; y < tiles; y++) {
      let c = img.get(Math.floor(x*tileSize), Math.floor(x*tileSize));
      let b = map(brightness(c), 0, 255, 1, 0);
      
      let z = map(b, 0, 1, -100, 100);
      
      push();
      translate(x*tileSize - width/2, y*tileSize - width/2, z);
      fill(c);
      rect(0, 0, tileSize*b*0.8, 5);
      pop();

    }
  }
  pop();
}
//  controllerChange( channel, number, value) {
//   if(number == 1){
//     pedal = value;
//   }
//   // Receive a controllerChange
//   println();
//   println("Controller Change:");
//   println("--------");
//   println("Channel:"+channel);
//   println("Number:"+number);
//   println("Value:"+value);
// }