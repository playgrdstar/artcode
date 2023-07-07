
var Xmax, Xmin, Ymax, Ymin;

var numpoints = 300;

var x = 0.01, y =0.01, z=0.01;

var P5 = new p5();

var colorsPalette = [P5.color(255, 190, 11, 25),
            P5.color(251, 86, 7, 25),
            P5.color(255, 0, 110, 25),
            P5.color(131, 56, 236, 25),
            P5.color(58, 134, 255, 20),];

var amplitude = new p5.Amplitude();

// Sketch 1
var sketch1 = function(p) {
var currentPos = [];
var newPos = [];
var initialnewPos = [];

p.setup = function()
{

    p.createCanvas(200,200);

    p.background(colorsPalette[0]);

    p.frameRate(30);

    for (var i=0;i<numpoints;i++){        
        currentPos.push({
          x: p.width/2,
          y: p.height/2,
          c: colorsPalette[4]
        })    
    }

    bedheadResults = bedhead(numpoints, 0.81, 0.92);
    initialnewPos = bedheadResults[0];
    Xmax = bedheadResults[1];
    Xmin = bedheadResults[2];
    Ymin = bedheadResults[3];
    Ymax = bedheadResults[4];

    for (var i=0;i<numpoints;i++){        
        newPos.push({
          x: 0.9*p.width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
          y: 0.9*p.height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
          c: colorsPalette[4]
        })    
    }


};

p.draw = function(){
    p.background(colorsPalette[0]);

    var amp = amplitude.getLevel()*100;

    if (p.frameCount%90==0){
        bedheadResults = bedhead(numpoints, 0.81, 0.92);
        _newPos = bedheadResults[0];
        Xmax = bedheadResults[1];
        Xmin = bedheadResults[2];
        Ymin = bedheadResults[3];
        Ymax = bedheadResults[4];

        for (var i=0;i<numpoints;i++){
            newPos[i].x = 0.9*p.width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
            newPos[i].y = 0.9*p.height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
        }
    }


    for (var i=0;i<numpoints;i++){
        TweenLite.to(currentPos[i], 2, newPos[i]);
        p.noStroke();
        p.fill(currentPos[i].c);
        p.ellipse(currentPos[i].x,currentPos[i].y,2*amp,2*amp);
    }

    

}

};
new p5(sketch1, 'p5canvas1');

// Sketch 2
var sketch2 = function(p) {
var currentPos = [];
var newPos = [];
var initialnewPos = [];
p.setup = function()
{
    p.createCanvas(200,200);

    p.background(colorsPalette[1]);

    p.frameRate(30);

    for (var i=0;i<numpoints;i++){        
        currentPos.push({
          x: p.width/2,
          y: p.height/2,
          c: colorsPalette[4]
        })    
    }

    bedheadResults = bedhead(numpoints, 0.1, 0.1);
    initialnewPos = bedheadResults[0];
    Xmax = bedheadResults[1];
    Xmin = bedheadResults[2];
    Ymin = bedheadResults[3];
    Ymax = bedheadResults[4];

    for (var i=0;i<numpoints;i++){        
        newPos.push({
          x: 0.9*p.width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
          y: 0.9*p.height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
          c: colorsPalette[4]
        })    
    }
};

p.draw = function(){

    var amp = amplitude.getLevel()*50;

    p.background(colorsPalette[1]);

    if (p.frameCount%90==0){
        bedheadResults = bedhead(numpoints, 0.1, 0.1);
        _newPos = bedheadResults[0];
        Xmax = bedheadResults[1];
        Xmin = bedheadResults[2];
        Ymin = bedheadResults[3];
        Ymax = bedheadResults[4];

        for (var i=0;i<numpoints;i++){
            newPos[i].x = 0.9*p.width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
            newPos[i].y = 0.9*p.height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
        }
    }


    for (var i=0;i<numpoints;i++){
        TweenLite.to(currentPos[i], 2, newPos[i]);
        p.noStroke();
        p.fill(currentPos[i].c);
        p.ellipse(currentPos[i].x,currentPos[i].y,amp,amp);
    }
}

};
new p5(sketch2, 'p5canvas2');



// Sketch 2
var sketch3 = function(p) {
var currentPos = [];
var newPos = [];
var initialnewPos = [];
p.setup = function()
{
    p.createCanvas(200,200);

    p.background(colorsPalette[2]);

    p.frameRate(30);

    for (var i=0;i<numpoints;i++){        
        currentPos.push({
          x: p.width/2,
          y: p.height/2,
          c: colorsPalette[4]
        })    
    }

    bedheadResults = bedhead(numpoints, 1.1, 0.8);
    initialnewPos = bedheadResults[0];
    Xmax = bedheadResults[1];
    Xmin = bedheadResults[2];
    Ymin = bedheadResults[3];
    Ymax = bedheadResults[4];

    for (var i=0;i<numpoints;i++){        
        newPos.push({
          x: 0.9*p.width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
          y: 0.9*p.height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
          c: colorsPalette[4]
        })    
    }
};

p.draw = function(){

    var amp = amplitude.getLevel()*200;

    p.background(colorsPalette[2]);

    if (p.frameCount%90==0){
        bedheadResults = bedhead(numpoints, 1.1, 0.8);
        _newPos = bedheadResults[0];
        Xmax = bedheadResults[1];
        Xmin = bedheadResults[2];
        Ymin = bedheadResults[3];
        Ymax = bedheadResults[4];

        for (var i=0;i<numpoints;i++){
            newPos[i].x = 0.9*p.width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
            newPos[i].y = 0.9*p.height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
        }
    }


    for (var i=0;i<numpoints;i++){
        TweenLite.to(currentPos[i], 2, newPos[i]);
        p.noStroke();
        p.fill(currentPos[i].c);
        p.ellipse(currentPos[i].x,currentPos[i].y,amp,amp);
    }
}

};
new p5(sketch3, 'p5canvas3');


// //////////

// Sketch 4
var sketch4 = function(p) {
var currentPos = [];
var newPos = [];
var initialnewPos = [];
p.setup = function()
{
    p.createCanvas(200,200);

    p.background(colorsPalette[3]);

    p.frameRate(30);

    for (var i=0;i<numpoints;i++){        
        currentPos.push({
          x: p.width/2,
          y: p.height/2,
          c: colorsPalette[4]
        })    
    }

    bedheadResults = bedhead(numpoints, -0.67, 0.83);
    initialnewPos = bedheadResults[0];
    Xmax = bedheadResults[1];
    Xmin = bedheadResults[2];
    Ymin = bedheadResults[3];
    Ymax = bedheadResults[4];

    for (var i=0;i<numpoints;i++){        
        newPos.push({
          x: 0.9*p.width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
          y: 0.9*p.height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
          c: colorsPalette[4]
        })    
    }
};

p.draw = function(){

    var amp = amplitude.getLevel()*100;
    p.background(colorsPalette[3]);

    if (p.frameCount%90==0){
        bedheadResults = bedhead(numpoints, -0.67, 0.83);
        _newPos = bedheadResults[0];
        Xmax = bedheadResults[1];
        Xmin = bedheadResults[2];
        Ymin = bedheadResults[3];
        Ymax = bedheadResults[4];

        for (var i=0;i<numpoints;i++){
            newPos[i].x = 0.9*p.width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
            newPos[i].y = 0.9*p.height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
        }
    }


    for (var i=0;i<numpoints;i++){
        TweenLite.to(currentPos[i], 2, newPos[i]);
        p.noStroke();
        p.fill(currentPos[i].c);
        p.ellipse(currentPos[i].x,currentPos[i].y,amp,25*amp);
    }
}

};
new p5(sketch4, 'p5canvas4');

// Sketch 5
var sketch5 = function(p) {
var currentPos = [];
var newPos = [];
var initialnewPos = [];

p.preload = function(){
    p.soundFormats('mp3');
    halation_track = p.loadSound('Halation_Evolv_Thoughts_Awaken_Us.mp3')
}

p.setup = function()
{

    halation_track.setVolume(0.2);
    halation_track.play();
    halation_track.loop();

    p.createCanvas(200,200);

    p.background(colorsPalette[2]);

    p.frameRate(30);

    for (var i=0;i<numpoints;i++){        
        currentPos.push({
          x: p.width/2,
          y: p.height/2,
          c: colorsPalette[4]
        })    
    }

    bedheadResults = bedhead(numpoints, -0.81, -0.92);
    initialnewPos = bedheadResults[0];
    Xmax = bedheadResults[1];
    Xmin = bedheadResults[2];
    Ymin = bedheadResults[3];
    Ymax = bedheadResults[4];

    for (var i=0;i<numpoints;i++){        
        newPos.push({
          x: 0.9*p.width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
          y: 0.9*p.height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
          c: colorsPalette[4]
        })    
    }
};

p.draw = function(){

    var amp = amplitude.getLevel()*100;
    p.background(colorsPalette[2]);

    if (p.frameCount%90==0){
        bedheadResults = bedhead(numpoints, -0.81, -0.92);
        _newPos = bedheadResults[0];
        Xmax = bedheadResults[1];
        Xmin = bedheadResults[2];
        Ymin = bedheadResults[3];
        Ymax = bedheadResults[4];

        for (var i=0;i<numpoints;i++){
            newPos[i].x = 0.9*p.width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
            newPos[i].y = 0.9*p.height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
        }
    }


    for (var i=0;i<numpoints;i++){
        TweenLite.to(currentPos[i], 2, newPos[i]);
        p.noStroke();
        p.fill(currentPos[i].c);
        p.ellipse(currentPos[i].x,currentPos[i].y,1*amp,75*amp);
    }
}

};
new p5(sketch5, 'p5canvas5');



// Sketch 6
var sketch6 = function(p) {
var currentPos = [];
var newPos = [];
var initialnewPos = [];

p.setup = function()
{
    p.createCanvas(200,200);

    p.background(colorsPalette[1]);

    p.frameRate(30);

    for (var i=0;i<numpoints;i++){        
        currentPos.push({
          x: p.width/2,
          y: p.height/2,
          c: colorsPalette[4]
        })    
    }

    bedheadResults = bedhead(numpoints, -0.65343, -0.7345345);
    initialnewPos = bedheadResults[0];
    Xmax = bedheadResults[1];
    Xmin = bedheadResults[2];
    Ymin = bedheadResults[3];
    Ymax = bedheadResults[4];

    for (var i=0;i<numpoints;i++){        
        newPos.push({
          x: 0.9*p.width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
          y: 0.9*p.height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
          c: colorsPalette[4]
        })    
    }
};

p.draw = function(){

    var amp = amplitude.getLevel()*100;

    p.background(colorsPalette[1]);

    if (p.frameCount%90==0){
        bedheadResults = bedhead(numpoints, -0.65343, -0.7345345);
        _newPos = bedheadResults[0];
        Xmax = bedheadResults[1];
        Xmin = bedheadResults[2];
        Ymin = bedheadResults[3];
        Ymax = bedheadResults[4];

        for (var i=0;i<numpoints;i++){
            newPos[i].x = 0.9*p.width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
            newPos[i].y = 0.9*p.height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
        }
    }


    for (var i=0;i<numpoints;i++){
        TweenLite.to(currentPos[i], 2, newPos[i]);
        p.noStroke();
        p.fill(currentPos[i].c);
        p.ellipse(currentPos[i].x,currentPos[i].y,100*amp,1*amp);
    }
}

};
new p5(sketch6, 'p5canvas6');


// //////////

// Sketch 7
var sketch7 = function(p) {
var currentPos = [];
var newPos = [];
var initialnewPos = [];
p.setup = function()
{
    p.createCanvas(200,200);

    p.background(colorsPalette[2]);

    p.frameRate(30);

    for (var i=0;i<numpoints;i++){        
        currentPos.push({
          x: p.width/2,
          y: p.height/2,
          c: colorsPalette[4]
        })    
    }

    bedheadResults = bedhead(numpoints, -0.67, 0.83);
    initialnewPos = bedheadResults[0];
    Xmax = bedheadResults[1];
    Xmin = bedheadResults[2];
    Ymin = bedheadResults[3];
    Ymax = bedheadResults[4];

    for (var i=0;i<numpoints;i++){        
        newPos.push({
          x: 0.9*p.width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
          y: 0.9*p.height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
          c: colorsPalette[4]
        })    
    }
};

p.draw = function(){

    var amp = amplitude.getLevel()*100;
    p.background(colorsPalette[2]);

    if (p.frameCount%90==0){
        bedheadResults = bedhead(numpoints, -0.67, 0.83);
        _newPos = bedheadResults[0];
        Xmax = bedheadResults[1];
        Xmin = bedheadResults[2];
        Ymin = bedheadResults[3];
        Ymax = bedheadResults[4];

        for (var i=0;i<numpoints;i++){
            newPos[i].x = 0.9*p.width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
            newPos[i].y = 0.9*p.height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
        }
    }


    for (var i=0;i<numpoints;i++){
        TweenLite.to(currentPos[i], 2, newPos[i]);
        p.noFill();
        p.stroke(currentPos[i].c);
        p.ellipse(currentPos[i].x,currentPos[i].y,20*amp,20*amp);
    }
}

};
new p5(sketch7, 'p5canvas7');

// Sketch 8
var sketch8 = function(p) {
var currentPos = [];
var newPos = [];
var initialnewPos = [];
p.setup = function()
{
    p.createCanvas(200,200);

    p.background(colorsPalette[1]);

    p.frameRate(30);

    for (var i=0;i<numpoints;i++){        
        currentPos.push({
          x: p.width/2,
          y: p.height/2,
          c: colorsPalette[4]
        })    
    }

    bedheadResults = bedhead(numpoints, -0.81, -0.92);
    initialnewPos = bedheadResults[0];
    Xmax = bedheadResults[1];
    Xmin = bedheadResults[2];
    Ymin = bedheadResults[3];
    Ymax = bedheadResults[4];

    for (var i=0;i<numpoints;i++){        
        newPos.push({
          x: 0.9*p.width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
          y: 0.9*p.height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
          c: colorsPalette[4]
        })    
    }
};

p.draw = function(){

    var amp = amplitude.getLevel()*100;
    p.background(colorsPalette[1]);

    if (p.frameCount%90==0){
        bedheadResults = bedhead(numpoints, -0.81, -0.92);
        _newPos = bedheadResults[0];
        Xmax = bedheadResults[1];
        Xmin = bedheadResults[2];
        Ymin = bedheadResults[3];
        Ymax = bedheadResults[4];

        for (var i=0;i<numpoints;i++){
            newPos[i].x = 0.9*p.width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
            newPos[i].y = 0.9*p.height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
        }
    }


    for (var i=0;i<numpoints;i++){
        TweenLite.to(currentPos[i], 2, newPos[i]);
        p.noFill();
        p.stroke(currentPos[i].c);
        p.ellipse(currentPos[i].x,currentPos[i].y,6*amp,6*amp);
    }
}

};
new p5(sketch8, 'p5canvas8');



// Sketch 9
var sketch9 = function(p) {
var currentPos = [];
var newPos = [];
var initialnewPos = [];
p.setup = function()
{
    p.createCanvas(200,200);

    p.background(colorsPalette[0]);

    p.frameRate(30);

    for (var i=0;i<numpoints;i++){        
        currentPos.push({
          x: p.width/2,
          y: p.height/2,
          c: colorsPalette[4]
        })    
    }

    bedheadResults = bedhead(numpoints, -0.64, 0.76);
    initialnewPos = bedheadResults[0];
    Xmax = bedheadResults[1];
    Xmin = bedheadResults[2];
    Ymin = bedheadResults[3];
    Ymax = bedheadResults[4];

    for (var i=0;i<numpoints;i++){        
        newPos.push({
          x: 0.9*p.width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
          y: 0.9*p.height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
          c: colorsPalette[4]
        })    
    }
};

p.draw = function(){

    var amp = amplitude.getLevel()*100;
    p.background(colorsPalette[0]);

    if (p.frameCount%90==0){
        bedheadResults = bedhead(numpoints, -0.64, 0.76);
        _newPos = bedheadResults[0];
        Xmax = bedheadResults[1];
        Xmin = bedheadResults[2];
        Ymin = bedheadResults[3];
        Ymax = bedheadResults[4];

        for (var i=0;i<numpoints;i++){
            newPos[i].x = 0.9*p.width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
            newPos[i].y = 0.9*p.height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
        }
    }


    for (var i=0;i<numpoints;i++){
        TweenLite.to(currentPos[i], 2, newPos[i]);
        p.noFill();
        p.stroke(currentPos[i].c);
        p.ellipse(currentPos[i].x,currentPos[i].y,8*amp,4*amp);
    }
}

};
new p5(sketch9, 'p5canvas9');
// function setup() {

    // c = createCanvas(600,600);
    // c.parent('p5canvas1');
    // c.parent('p5canvas2');
    
    // colorsPalette = [color(146, 167, 202,30),
    //         color(186, 196, 219,50),
    //         color(118, 135, 172,250),
    //         color(76, 41, 81,250),
    //         color(144, 62, 92,50),
    //         color(178, 93, 119,250),
    //         color(215, 118, 136,250),
    //         color(246, 156, 164,250),];
    // background(colorsPalette[0]);

    // frameRate(30);

    // for (var i=0;i<numpoints;i++){        
    //     currentPos.push({
    //       x: width/2,
    //       y: height/2,
    //       c: colorsPalette[6]
    //     })    
    // }

    // bedheadResults = bedhead(numpoints);
    // initialnewPos = bedheadResults[0];
    // Xmax = bedheadResults[1];
    // Xmin = bedheadResults[2];
    // Ymin = bedheadResults[3];
    // Ymax = bedheadResults[4];

    // for (var i=0;i<numpoints;i++){        
    //     newPos.push({
    //       x: 0.9*width*(initialnewPos[i].x - Xmin)/(Xmax-Xmin),
    //       y: 0.9*height*(initialnewPos[i].y - Ymin)/(Ymax-Ymin),
    //       c: colorsPalette[6]
    //     })    
    // }

    // for (var i=0;i<numpoints;i++){
    //     noStroke();
    //     fill(newPos[i].c);
    //     ellipse(newPos[i].x,newPos[i].y,5,5);
    //     // noStroke();
    //     // fill(255,150);
    //     // // ellipse(currentPos[i].x+2,currentPos[i].y,1,1); 
    //     // // ellipse(currentPos[i].x-2,currentPos[i].y,1,1);   
    // }

    // console.log(newPos);

// }

// function draw() {
    
    // background(colorsPalette[0]);

    // if (frameCount%90==0){
    //     bedheadResults = bedhead(numpoints);
    //     _newPos = bedheadResults[0];
    //     Xmax = bedheadResults[1];
    //     Xmin = bedheadResults[2];
    //     Ymin = bedheadResults[3];
    //     Ymax = bedheadResults[4];

    //     for (var i=0;i<numpoints;i++){
    //         newPos[i].x = 0.9*width*(_newPos[i].x - Xmin)/(Xmax-Xmin);
    //         newPos[i].y = 0.9*height*(_newPos[i].y - Ymin)/(Ymax-Ymin);      
    //     }
    // }


    // for (var i=0;i<numpoints;i++){
    //     TweenLite.to(currentPos[i], 2, newPos[i]);
    //     noStroke();
    //     fill(currentPos[i].c);
    //     ellipse(currentPos[i].x,currentPos[i].y,3,3);
    // }

// }


function bedhead(numpoints, astart, bstart){

    var dataArray = [];
    var a = astart+Math.random()*0.5;
    var b = bstart+Math.random()*0.5;

    for (var i=0;i<numpoints;i++){
        var x1 = x;
        var y1 = y;
        
        x = Math.sin(x1*y1/b)*y1+Math.cos(a*x1-y1); 
        y = x1+Math.sin(y1)/b;
        
        dataArray.push({
          x: x,
          y: y,
          c: colorsPalette[Math.floor(Math.random(8))]
        })    

    }

    var Xmax  = Math.max.apply(Math, dataArray.map(function(o) { return o.x; }))
    var Xmin  = Math.min.apply(Math, dataArray.map(function(o) { return o.x; }))
    var Ymax  = Math.max.apply(Math, dataArray.map(function(o) { return o.y; }))
    var Ymin  = Math.min.apply(Math, dataArray.map(function(o) { return o.y; }))

    return [dataArray, Xmax, Xmin, Ymax, Ymin];
}

