
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var rope1,bob1,bob2,bob3,bob4,bob5,bobDiameter;
var start;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  startBobPositionX = width/2;
  startBobPositionY = height/4 + 500;
  bob1  = new bob(startBobPositionX-40*2,startBobPositionY,40);
  bob2  = new bob(startBobPositionX-40,startBobPositionY,40);
 // bob3  = new bob(400,500,50);
  roof1 = new roof(width/2,height/4,width/7,25);
	rope1 = new rope(bob1.body,roof1.body,-40*2,0);
  rope2 = new rope(bob2.body,roof1.body,-40*1,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  

  roof1.display();
  bob1.display();
  bob2.display();
  rope1.display();
  rope2.display();
  //rope1.display();

  drawSprites();
 
}



