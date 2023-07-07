let video;
let poseNet;
let poses = [];
const transparency = 60;
let colorPalette;


function setup() {
  c = createCanvas(600, 600);
  c.parent("p5canvas");
  background(242, 27, 106,100);
  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video, modelReady);

  poseNet.on('pose', function(results) {
    poses = results;
  });
  video.hide();
  flock = new Flock();
  colorPalette = [color(95,134,173, transparency), color(231,76,60, transparency),
    color(255,231,255, transparency), color(61,152,219, transparency),
    color(41, 218, 185, transparency)];
}

function modelReady() {
  // select('#status').html('Model Loaded');
}

function draw() {
  // image(video, 0, 0, width, height);
  background(242, 27, 106, 2);
  drawFlock();
  flock.run();
  flock.remParticle();
  if (flock.particles.length>500){
    flock.particles = [];
  }
  
}

function drawFlock()  {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;

    let noseData = pose.keypoints[0];
    if (noseData.score > 0.2){
      fill(255,80);
      text('nose', noseData.position.x, noseData.position.y, noseData.position.x, noseData.position.y)
      flock.addParticle(new Particle(noseData.position.x, noseData.position.y));
    }

    let lefteyeData = pose.keypoints[1];
    if (lefteyeData.score > 0.2){
      fill(255,80);
      text('eye', lefteyeData.position.x, lefteyeData.position.y, lefteyeData.position.x, lefteyeData.position.y)
      flock.addParticle(new Particle(lefteyeData.position.x, lefteyeData.position.y));
    }
    let righteyeData = pose.keypoints[2];
    if (righteyeData.score > 0.2){
      fill(255,80);
      text('eye', righteyeData.position.x, righteyeData.position.y, righteyeData.position.x, righteyeData.position.y)
      flock.addParticle(new Particle(righteyeData.position.x, righteyeData.position.y));
    }
  }
}

class Particle {
  constructor(x, y){
    this.acceleration = createVector(0,0);
    this.velocity = createVector(random(-1,1), random(-1,1));
    this.position = createVector(x, y);
    this.positionprev = createVector(x, y);
    this.r = 20.0;
    this.maxspeed = 3;
    this.maxforce = 0.01;
    this.color = random(colorPalette);
  }

  run(particles){
    this.flock(particles);
    this.update();
    this.borders();
    this.render();
  }

  applyForce(force){
    this.acceleration.add(force);
  }

  flock(particles){
    let sep = this.separate(particles);
    let ali = this.align(particles);
    let coh = this.cohesion(particles);

    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(1.0);

    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }

  update(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    // this.positionprev = this.position;
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.r = this.r + 1;
  }

  seek(target){
    let desired = p5.Vector.sub(target, this.position);
    desired.normalize();
    desired.mult(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    return steer;
  }

  render(){
    noFill();
    stroke(this.color);
    strokeWeight(0.5);
    ellipse(this.position.x, this.position.y, this.r, this.r);
    bezier(this.position.x, this.position.y, random(width/2), random(height/2), random(width/4), random(height/4), this.positionprev.x, this.positionprev.y)
    // let theta = this.velocity.heading() + radians(90);
  }

  borders() {
    if (this.position.x < -this.r) this.position.x = width + this.r;
    if (this.position.y < -this.r) this.position.y = height + this.r;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
  }

  separate(particles) {
    let desiredseparation = 25.0;
    let steer = createVector(0, 0);
    let count = 0;
    for (let i = 0; i < particles.length; i++) {
      let d = p5.Vector.dist(this.position, particles[i].position);
      if ((d > 0) && (d < desiredseparation)) {
        let diff = p5.Vector.sub(this.position, particles[i].position);
        diff.normalize();
        diff.div(d);
        steer.add(diff);
        count++;
      }
    }
    if (count > 0) {
      steer.div(count);
    }

    if (steer.mag() > 0) {
      steer.normalize();
      steer.mult(this.maxspeed);
      steer.sub(this.velocity);
      steer.limit(this.maxforce);
    }
    return steer;
  }

  align(particles) {
    let neighbordist = 50;
    let sum = createVector(0, 0);
    let count = 0;
    for (let i = 0; i < particles.length; i++) {
      let d = p5.Vector.dist(this.position, particles[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(particles[i].velocity);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxspeed);
      let steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }

  cohesion(particles) {
    let neighbordist = 50;
    let sum = createVector(0, 0);
    let count = 0;
    for (let i = 0; i < particles.length; i++) {
      let d = p5.Vector.dist(this.position, particles[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(particles[i].position); 
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.seek(sum);
    } else {
      return createVector(0, 0);
    }
  }

}


class Flock {

  constructor() {
    this.particles = [];
  }

  run() {
    for (let particle of this.particles) {
      particle.run(this.particles);
    }
  }

  addParticle(b) {
    this.particles.push(b);
  }

  remParticle(){
    this.particles.shift(10);
  }
}