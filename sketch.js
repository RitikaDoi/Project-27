
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
	bob2 = new bob(640);
	bob3 = new bob(560);
	bob4 = new bob(680);
	bob5 = new bob(520);
	//bob6 = new bob(120);

	roof1 = new roof();

	rop1 = new rop(bob1.body, roof1.body, 0, 0);
	rop2 = new rop(bob2.body,roof1.body, 40, 0);
	rop3 = new rop(bob3.body,roof1.body, -40, 0);
	rop4 = new rop(bob4.body,roof1.body, 80, 0);
	rop5 = new rop(bob5.body,roof1.body, -80, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Blue");

  rop1.display(600);
  rop2.display(640);
  rop3.display(560);
  rop4.display(680);
  rop5.display(520);

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //bob6.display();

  roof1.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(bob5.body, bob5.body.position, {x:-40, y:0});
	   
	 }
   }



