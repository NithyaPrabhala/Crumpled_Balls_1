
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 600, 10);

	ground = new Ground(400, 610, 800, 20);

	left = new Dustbin(550, 550, 20, 100);
	bottom = new Dustbin(610, 600, 100, 20);
	right = new Dustbin(670, 550, 20, 100);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  drawSprites();
 
  paper.display();
  ground.display();
  left.display();
  right.display();
  bottom.display();

  drawSprites();

  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85})	
	}
}



