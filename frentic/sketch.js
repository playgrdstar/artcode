var yoff = 0.0;
var xoff = 0.0;
var a = 0.0;
var offset, r, x, y, x1, y2, colorsPalette,n;
var r = 0;
var angle = 10;
var centercir = 1;

function preload(){
  one = loadImage('flyone.png');
  two = loadImage('flytwo.png');
  three = loadImage('flythree.png');

  imglist = [one,one,two,two,three,three];

}


function setup() {
  createCanvas(600, 600);
  background(255,2);
  ellipseMode(CENTER);
  imageMode(CENTER);
  colorsPalette = [color(146, 167, 202,100),
            color(186, 196, 219,100),
            color(118, 135, 172,100),
            color(76, 41, 81,100),
            color(144, 62, 92,100),
            color(178, 93, 119,100),
            color(215, 118, 136,100),
            color(246, 156, 164,100),];
  smooth();
  frameRate(60);
  n=0
}

function draw() {
  n++;
  push();

  // translate(width/2,height/2);
  // scale(3);
  rotate(n);

  var cx = width/2 + 250*cos(angle);
  var cy = height/2 + 250*sin(angle);
  // ellipse(cx,cy,30,30);
  angle+=5;
  // tint(255,10);
  image(imglist[n%6], cx, cy, 100, 100); 
  // noStroke();
  // stroke(255,100);
  // fill(255,50,100,10);
  // ellipse(0,0,100,100);
  pop();

  push();

  translate(width/2,height/2);
  scale(1.5);
  // rotate(n);
  // tint(255,10);
  image(imglist[n%6], 0, 0, 100, 100); 
  // noStroke();
  // stroke(255,100);
  // fill(255,50,100,10);
  // ellipse(0,0,100,100);
  pop();
  background(255,117,28,1);
  // fill(colorsPalette[floor(random(8))]);
  // stroke(255,10);
  // strokeWeight(0.1);
  // var cx = width/2 + 170*cos(angle);
  // var cy = height/2 + 170*sin(angle);
  // ellipse(cx,cy,30,30);
  // angle+=20;
  // fill(colorsPalette[6]);
  // noFill();
  // stroke(255,255);
  // strokeWeight(0.5);
  // var cx = width/2 + 100*cos(angle);
  // var cy = height/2 + 100*sin(angle);
  // ellipse(cx,cy,30,30);
  // angle+=10;

  // fill(255,100,100,10);
  noStroke();
  ellipse(width/2,height/2,centercir,centercir);
  centercir+=1;
  push();
  var radius = 150;
  // fill(colorsPalette[6]);
  // stroke(colorsPalette[1]);
  // strokeWeight(1);
  // ellipse(width/2,height/2,radius,radius);
  translate(width / 2, height / 2);
  var radius = 200;
  fill(colorsPalette[floor(random(8))]);
  stroke(colorsPalette[floor(random(8))])
  beginShape();
  // r = radius;
  offset = map(noise(xoff, yoff), 0, 1, -55, 25);
  r = radius + offset;
  x = r * cos(a);
  y = r * sin(a);
  x1 = r * cos(a+PI/20);
  y1 = r * sin(a+PI/20);
  vertex(0,0);
  vertex(x, y);
  vertex(x1,y1);
  xoff += 0.1;
  // r+=0.5;
  a+=0.1;
  angle-=0.011;
  endShape();
  pop();


  noFill();
  // stroke(255,255);
  // strokeWeight(0.5);
  // var cx = width/2 + 230*cos(angle);
  // var cy = height/2 + 230*sin(angle);
  // ellipse(cx,cy,25,25);
  // angle+=10;
  push();
  var radius = 100;
  // fill(colorsPalette[0]);
  // stroke(colorsPalette[3]);
  // strokeWeight(1);
  // ellipse(width/2,height/2,radius,radius);
  fill(colorsPalette[floor(random(8))]);
  stroke(colorsPalette[floor(random(8))])
  translate(width/2, height/2);
  beginShape();
  // r = radius;
  offset = map(noise(xoff, yoff), 0, 1, -20, 40);
  r = radius + offset;
  x = r * cos(a);
  y = r * sin(a);
  x1 = r * cos(a+PI/30);
  y1 = r * sin(a+PI/30);
  vertex(0,0);
  vertex(x, y);
  vertex(x1,y1);
  xoff += 0.1;
  // r+=0.5;
  a+=0.1;
  angle-=0.011;
  endShape();
  pop();

  push();
  
  // noFill();
  // stroke(255,100);
  // strokeWeight(1);
  // var cx = width/2 + 25*cos(angle);
  // var cy = height/2 + 25*sin(angle);
  // ellipse(cx,cy,10,10);
  // angle+=5;
  var radius = 100;
  // fill(colorsPalette[2]);
  // stroke(colorsPalette[5]);
  // strokeWeight(1);
  // ellipse(width/2,height/2,radius,radius);
  fill(colorsPalette[floor(random(8))]);
  stroke(colorsPalette[floor(random(8))])
  translate(width/2, height/2);
  rotate(90);
  beginShape();
  // r = radius;
  offset = map(noise(xoff, yoff), 0, 1, -90, 55);
  r = radius - offset;
  x = r * cos(a);
  y = r * sin(a);
  x1 = r * cos(a+PI/10);
  y1 = r * sin(a+PI/10);
  vertex(0,0);
  vertex(x, y);
  vertex(x1,y1);
  xoff += 0.1;
  r-=0.5;
  a+=0.1;
  angle-=0.011;
  endShape();
  pop();

  yoff += 0.01;

}