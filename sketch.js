
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new bob(600);
	bob2 = new bob(620);
	bob3 = new bob(580);
	bob4 = new bob(640);
	bob5 = new bob(560);

	roof1 = new roof();

	rop1 = new rop(bob1.body, roof1.body, 0, 0);
	rop2 = new rop(bob2.body,roof1.body, 20, 0);
	rop3 = new rop(bob3.body,roof1.body, -20, 0);
	rop4 = new rop(bob4.body,roof1.body, 40, 0);
	rop5 = new rop(bob5.body,roof1.body, -40, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Blue");

  rop1.display();
  rop2.display();
  rop3.display();
  rop4.display();
  rop5.display();

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(bob4.body, bob4.body.position, {x:85, y:-65});
	   
	 }
   }



