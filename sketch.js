
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,treeImg;
var boy,boyImg;

function preload(){
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world

	stone = new Stone(250,550,40);

	ground = new Ground(750,670,1500,20);

	chain = new Chain(stone.body,{x:250,y:550});

	boy = createSprite(300,600,10,10);
	tree = createSprite(950,450,500,450);

	mango1 = new Mango(870,450,40);
	mango2 = new Mango(950,350,50);
	mango3 = new Mango(920,350,40);
	mango4 = new Mango(1020,450,60);
	mango5 = new Mango(980,400,40);
	mango6 = new Mango(770,440,40);
	mango7 = new Mango(1100,350,60);
	mango8 = new Mango(1000,440,40);
	mango9 = new Mango(870,400,40);



	boy.addImage(boyImg);

	tree.addImage(treeImg);

	tree.scale = 0.35;
	boy.scale = 0.09;
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();

	stone.display();

	ground.display();

	chain.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);

 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	chain.fly();
}

function detectCollision(stone,mango){
	var mangoPosition = mango.body.position
	var stonePosition = stone.body.position
	var distance = dist(stonePosition.x, stonePosition.y,mangoPosition.x, mangoPosition.y);
	
	if (distance <= mango.radius + stone.radius){
		Matter.Body.setStatic(mango.body, false);
	}
}

