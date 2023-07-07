var n = 0;
var c = 4;
var points = [];
var start = 0; 

function setup() {
	createCanvas(400,400);
	angleMode(DEGREES);
	colorMode(RGB);
}


function draw() {
	background(255,0,0,10);
	translate(width/2,height/2);
	rotate(n*0.3);

	for (var i = 0; i<n; i+=3){
		var a = i * 137.5;
		var r = c * sqrt(i);
		var x = r * cos(a);
		var y = r * sin(a);
		// console.log(start + i*0.5);
		var hu = sin(start + i*0.5);
		
		hu = map(hu,-1,1,0,200);
		// console.log(hu);
		fill(hu,hu/10,hu/4,hu/10);
		stroke(hu/2+100,hu/2+100,hu/2+100,hu/2);
		// noStroke();
		ellipse(x,y,hu,hu);
		
	}
	n+=5;
	start+=5;
}