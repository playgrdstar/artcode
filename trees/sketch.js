function setup() {
    createCanvas(800,600);
    background(229, 241, 255,100);
    angleMode(DEGREES);
    // noLoop();
}

function draw() {

    tree(width/2-100,height-100,0,6,0,175,0,50);
    tree(width/2,height-100,0,4,5,255,0,40);
    tree(width/2+100,height-100,0,3,10,255,0,30);

}

function tree(x1,y1,angle,depth,r,g,b,a){
    var length = 50*Math.tanh(depth/4);
    var x2 = x1 - (length*sin(angle));
    var y2 = y1 - (length*cos(angle));
    var x3 = x1 - (0.3*length*sin(angle));
    var y3 = y1 - (0.3*length*cos(angle));    
    var angle1 = angle + 20 + random(-15,15);
    var angle2 = angle - 20 + random(-15,15);

    stroke(r,g,b,a);
    strokeWeight(0.01+depth/10);
    line(x1,y1,x2,y2);

    if (depth>1){
        tree(x2,y2,angle1,depth-1);
        tree(x2,y2,angle2,depth-1);
        tree(x3,y3,angle1,depth-1);
        tree(x3,y3,angle2,depth-1);
    }

}