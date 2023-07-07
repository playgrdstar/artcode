var yoff = 0;
var colorPalette;
var transparency=15;

function setup() {
  createCanvas(500, 500);
  colorPalette = [color(95,134,173, transparency), color(231,76,60, transparency),
    color(255,231,255, transparency), color(61,152,219, transparency),
    color(41, 218, 185, transparency)];
}

function draw() {
  background(colorPalette[1]);
  translate(width / 2, height / 2);
  //rotate(PI / 2);
  strokeWeight(2);
  stroke(random(colorPalette));
  fill(colorPalette[2]);
  

  var da = PI / 200;
  var dx = 0.05;

  var xoff = 0;
  beginShape();
  for (var a = 0; a <= TWO_PI; a += da) {
    var n = noise(xoff, yoff);
    var r = sin(2 * a) * map(n, 0, 1, 50, 300);
    var x = r * cos(a);
    var y = r * sin(a);
    if (a < PI){
        xoff += dx; 
    } else{
        xoff -= dx; 
    }
    //point(x, y);
    vertex(x, y);
  }
  endShape();

  yoff += 0.01;
}