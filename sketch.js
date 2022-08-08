
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var block1, block2;
var plane;
var run;
var rotador1, rotador2, rotador3;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
var ball1, ball2, ball3, ball4, ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
  //mecanismo
 var plane_options = {
	isStatic: true
 }
 var block1_options = {
	isStatic: true
 }
 var block2_options = {
	isStatic: true
 }
 var rotador_options = {
	isStatic: true
 }
 var ball_options = {
	restitution: 0.95,
    frictionAir:0.01
 }
 
 //blocks e plane

 block1 = Bodies.rectangle(250,400,50,20,block1_options);
 World.add(world,block1);

 block2 = Bodies.rectangle(550,400,50,20,block2_options);
 World.add(world,block2);

 plane = Bodies.rectangle(400,690,400,20,plane_options);
 World.add(world,plane);

 rotador1 = Bodies.rectangle(350,250,150,20,rotador_options);
  World.add(world,rotador1);

  rotador2 = Bodies.rectangle(350,250,150,20,rotador_options);
  World.add(world,rotador2);

  rotador3 = Bodies.rectangle(350,250,150,20,rotador_options);
  World.add(world,rotador3);

  ball1= Bodies.circle(350,200,20,ball_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(250,200,20,ball_options);
  World.add(world,ball2);
   
  ball3 = Bodies.circle(350,200,20,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(550,200,20,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(350,350,20,ball_options);
  World.add(world,ball5);

	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background("green");
  Engine.update(engine);
  
  fill("red");
  rect(block1.position.x,block1.position.y,150,20);

  fill("red");
  rect(block2.position.x,block2.position.y,150,20);

  fill("red");
  rect(plane.position.x,plane.position.y,1600,20);

  fill("red");
  rect(rotador1.position.x,rotador1.position.y,100,20);

  fill("red");
  rect(rotador2.position.x,rotador2.position.y,100,20);

  fill("red");
  rect(rotador3.position.x,rotador3.position.y,100,20);

  Matter.Body.rotate(rotador1,angle1)
  push();
  translate(rotador1.position.x,rotador1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 += 0.4;
 
  Matter.Body.rotate(rotador2,angle2)
  push();
  translate(rotador2.position.x,rotador2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 += 0.6;

  Matter.Body.rotate(rotador3,angle3)
  push();
  translate(rotador3.position.x,rotador3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 += 0.8;

  fill("blue")
  ellipse(ball1.position.x, ball1.position.y,20);

  fill("blue")
  ellipse(ball2.position.x, ball2.position.y,20);

  fill("blue")
  ellipse(ball3.position.x, ball3.position.y,20);

  fill("blue")
  ellipse(ball4.position.x, ball4.position.y,20);

  fill("blue")
  ellipse(ball5.position.x, ball5.position.y,20);

  drawSprites();
}



