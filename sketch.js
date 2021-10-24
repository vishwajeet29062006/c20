
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  //myworld is myengine's world
  world = engine.world;

  Engine.run(engine);

  var balloptions={
restitution:1
  }
ball = Bodies.circle(100,10,20,balloptions);
World.add(world,ball);
console.log(ball);

var ground_options={
  isStatic: true
}

ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);
//console.log(ground);
}

function draw() 
{
  background(51);
ellipse(ball.position.x,ball.position.y,40);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
}

