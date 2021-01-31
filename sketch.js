

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcher1;
var mango1;
var world,boy;
var stone;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  mango1=new mango(1100,100,30);
  mango2=new mango(989,110,30);
  mango3 =new mango(1000,120,30);
  mango4=new mango(920,130,30);
  mango5=new mango(895,135,30);
  
  stone = new Stone(235,420,30)
  treeObj=new tree(1050,580);
  launcher1 = new Launcher(stone.body,{x:235,y:420})
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
 

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 stone.display();
 launcher1.display()
  groundObject.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
}

function mouseDragged() {
  
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseX})
  }
  
  function mouseReleased(){
      launcher1.fly()
  }


function detectCollision(ob1,ob2){
  mangoBodyPosition = ob2.body.position
  stoneBodyPosition = ob1.body.position
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=ob2.r+ob1.r){
    Matter.Body.setStatic(ob2.body,false)
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher1.attach(stone.body)
  }
}










