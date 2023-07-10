// (c) 2019 Ming | Playgrd | Gary Ang
// Contact - playgrdstar@gmail.com

var x, y;
var A, B;
var zoom;
var colorsPalette;
var transparency;
var mouseFlag;

function setup() {
    // Setting up the canvas
    c = createCanvas(800,800);
    background(0,255);

    // Setting some constants
    mouseFlag = 0;
    // Level of opacity
    transparency = 100;

    // Zooming in and out
    zoom = 10;

    // Starting point for x and y coordinates
    x = 0.1;
    y = 0.1;

    // Combinations of constants to try

    // Option 1
    // A = 0.65343;
    // B = 0.7345345;
    // Option 2
    // A = -0.81;
    // B = -0.92;
    // Option 3
    // A = -0.64;
    // B = 0.76;
    // Option 4
    // A = 0.06;
    // B = 0.98;
    // Option 5
    // A=-0.67;
    // B=0.83;
    // Option 6
    A = 0.01;
    B = 0.01;

    // A color palette that can be used
    
    // colorsPalette = [color(95, 134, 173,transparency),
    //         color(231, 76, 60,transparency),
    //         color(255, 231, 255,transparency),
    //         color(61, 152, 219,transparency),
    //         color(41, 128, 185,transparency),];
    frameRate(30);
}

function draw() {
    // randomise x and y at each drawing cycle
    x = random(0,1);
    y = random(0,1);
    // Set background for each drawing cycle
    background(0, 100);

    // Move to center
    translate(width/2,height/2);

    // Call bedhead function
    bedhead(A, B);

    // Increment A and B for each drawing cycle
    A = A + 0.01;
    B = B + 0.01;
}

function bedhead(A, B){
    // Number of iterations to draw each of the points
    for (var i=0;i<4000;i++){
        var x_prev = x;
        var y_prev = y;

        // Bedhead equation
        x = sin(x_prev*y_prev/B)*y_prev+cos(A*x_prev-y_prev); 
        y = x_prev+sin(y_prev)/B;
        
        // Drawing lines
        stroke(color(255,255,255,10));
        strokeWeight(0.5);
        line(x*width/zoom, y*height/zoom, x_prev*width/zoom, y_prev*height/zoom);

        // Drawing circles
        fill(color(255,255,255,10));
        ellipse(x*width/zoom,y*height/zoom,2,2);       
    }

}

// Pause and save image on mouse press; press again to run
function mousePressed() {
    if (mouseFlag == 0){
        noLoop();
        saveCanvas(c, 'myCreationWithMing', 'jpg');
        mouseFlag=1;
    } else {
        loop();
    }
}
