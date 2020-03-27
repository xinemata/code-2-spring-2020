let capture;
let button;
let c;

function setup() {
  c = createCanvas(300, 200); // putting createCanvas inside a variable will enable us to save the canvas as an image in takePic()
  c.parent('p5pos');
  capture = createCapture(VIDEO);
  capture.elt.setAttribute('playsinline', ''); // add this for iphone compatibility
  capture.hide();
  button = createButton('Save Pic');
  button.parent('p5pos');
  button.mousePressed(takePic);
}

function draw() {
  background(255);
  image(capture, 0, 0, width, height);
  filter(INVERT);
}

function takePic() {
  saveCanvas(c, 'myCanvas', 'jpg');
}