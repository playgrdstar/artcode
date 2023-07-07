var imgName = "circle.png";
var img;
var toDraw;
var circleArr = [];
var circleDropsArr = [];
var numCircles = 100;
var frameArr = []; 
var frameArr_2 = [];


function preload() {
    img = loadImage(imgName);
    table = loadTable("randomness.csv", "csv", "header");
}

function setup() {
    createCanvas(500, 500);
    img.loadPixels();
    background(0,0,0,255);
    frameRate(24);
    toDraw = new Array(img.width/5);
    for (var i=0; i<img.width; i+=5) {
        toDraw[i] = new Array(img.height/5);
    }

  for (var r = 0; r < table.getRowCount(); r++)
    for (var c = 2; c < table.getColumnCount(); c++) {
      x = table.getNum(r, c-2);
      y = table.getNum(r, c-1);
      value = table.getNum(r, c);
      toDraw[x][y] = value;
        if (value==5) {
                thisFrame= new Frame(x, y);
                frameArr.push(thisFrame);
            } 
    }

    weight = 1000;

    for (var i = 0; i <frameArr.length; i++){
        thisCirc = new Circle(frameArr[i].x, frameArr[i].y);
        circleArr.push(thisCirc);
    }
}

function draw() {
    background(0,0,0,40);
    var lastx = random(width);
    var lasty = random(height); 

    for (var i = 0; i<circleArr.length; i++) {
        thisCirc = circleArr[i];
        thisCirc.updateMe(); 
    }

    for (var i = 0; i <frameArr.length; i+=1){
        stroke(random(100, 200), random(100, 200), random(100, 200), random(200, 255));
        strokeWeight(1.0);
        point(frameArr[i].x+random(-10, 10), frameArr[i].y+random(-10, 10));
        point(frameArr[i].x+random(-3, 3), frameArr[i].y+random(-3, 3));
    }

    for (var i = 0; i <frameArr_2.length; i+=1){
        stroke(random(100, 200), random(100, 200), random(100, 200), random(200, 255));
        strokeWeight(1.0);
        point(frameArr_2[i].x+random(-10, 10), frameArr_2[i].y+random(-10, 10));
        point(frameArr_2[i].x+random(-3, 3), frameArr_2[i].y+random(-3, 3));
    }

    for (var x=0; x<img.width; x+=50) {
        for (var y=0; y<img.height; y+=50) {
            // if (toDraw[x][y] == 4){
                strokeWeight(1.0);
                stroke(random(100, 200), random(100, 200), random(100, 200), random(20));
                noFill();
                beginShape();
                curveVertex(x, y);
                curveVertex(x+random(-weight, weight), y+random(-weight, weight));
                curveVertex(x+random(-weight-10, weight+10), y+random(-weight-10, weight+10));
                curveVertex(x+random(-weight-20, weight+20), y+random(-weight-20, weight+20));
                curveVertex(x+random(-weight+20, weight-20), y+random(-weight+20, weight-20));
                curveVertex(x+random(-weight+10, weight-10), y+random(-weight+10, weight-10));
                curveVertex(x+random(-weight, weight), y+random(-weight, weight));
                endShape();
            // }
        }
    }
    // if (weight<100){
    // weight++;
    // }
}

function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.dir = 1;
    this.radius = random(200);
    this.xmove = random(5);
    this.ymove = random(5);
    noStroke();
    fill(random(100, 200), random(100, 200), random(100, 200), random(30));
    ellipse(this.x, this.y, this.radius, this.radius);

    this.updateMe = function() {
        this.x += this.xmove*this.dir+random(-5,5);
        this.y += this.ymove*this.dir+random(-5,5);

        for (var i = 0; i <frameArr.length; i++) {
            otherFrame = frameArr[i];
            var dis = dist(this.x, this.y, otherFrame.x, otherFrame.y);

            if (dis<2) {
                this.dir = -this.dir*random(1);
                extraCirc = new Circle(this.x, this.y);
                extraCirc.updateMe(); 
            }
        }
    }
}

function Frame(x, y) {
    this.x = x;
    this.y = y;
}
