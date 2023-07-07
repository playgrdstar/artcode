var xright, xleft, y, sright, sleft;
var colorPalette;
var transparency = 80;

function setup() {
  	createCanvas(800,600);
  	background(0);
      frameRate(10);
      xright = width/2;
      xleft = width/2;
      y = height/2;
      sright = 200;
      sleft = 200;
      colorPalette = [color(95,134,173, transparency), color(231,76,60, transparency),
        color(255,231,255, transparency), color(61,152,219, transparency),
        color(41, 218, 185, transparency)];
}

function draw() {

	background(0,0);
    fill(random(colorPalette));
    noFill();
    strokeWeight(2);
    stroke(random(colorPalette));
    // ellipse(x,y,s);
    if (sright > 0) {
        xright += 1;
        sright -= 1;
        ellipse(xright-2,y,sright-100);
        ellipse(xright,y+50,sright);
        ellipse(xright,y,sright);
        ellipse(xright,y-50,sright);
        ellipse(xright+2,y,sright-100);
    }
    if (sleft > 0) {
        xleft -= 1;
        sleft -= 1;
        ellipse(xleft-2,y,sleft-100);
        ellipse(xleft,y+50,sleft);
        ellipse(xleft,y,sleft);
        ellipse(xleft,y-50,sleft);
        ellipse(xleft+2,y,sleft-100);
    }
	// holocrux(width/2,height/2,150);
	
}

function holocrux(x,y,s){

	fill(255,255,255,50);
	ellipse(x,y,s)

	if (s>0){
		holocrux(x+20,y,s-10);
		holocrux(x-20,y,s-10);
	}
	
}