
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree;
var boy,treep;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,stone;
var launcher;
function preload()
{
boy=loadImage("boy.png")	
treep=loadImage("tree.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground=new Ground(400,696,2040,18)

  
  mango1=new Mango(700,420,40,40)
  mango2=new Mango(780,410,40,40)
  mango3=new Mango(700,320,40,40)
  mango4 =new Mango(760,320,40,40)
  mango5=new Mango(800,360,40,40)
  mango6=new Mango(890,360,40,40)
  mango7=new Mango(800,220,40,40)
  mango8=new Mango(850,260,40,40)

  stone=new Stone(90,570,40,40)

  launcher=new Launcher(stone.body,{x:105,y:570})
}


function draw() {
  rectMode(CENTER);
  background("grey");

  image(boy,50,516,240,240);
  image(treep,600,160,380,550);

  if(keyDown("space")){
    Matter.Body.setPosition(stone.body,{x:90, y:570})
   launcher.attach(stone.body);
  }
  drawSprites();
 ground.display();
 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();


 detectcollision(stone,mango1)
 detectcollision(stone,mango2)
 detectcollision(stone,mango3)
 detectcollision(stone,mango4)
 detectcollision(stone,mango5)
 detectcollision(stone,mango6)
 detectcollision(stone,mango7)
 detectcollision(stone,mango8)
 stone.display()
 launcher.display();
}



function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function detectcollision(rock,mangos){
  mangoBodyPosition = rock.body.position
  stoneBodyPosition = mangos.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=mangos.r+rock.r)
  {
	  Matter.Body.setStatic(mangos.body, false);
  }
}
