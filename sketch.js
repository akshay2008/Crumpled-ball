const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero;
var ground1,ground2;
var bin1,bin2;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(60, 600, 900, 20);
  ground2 = new Ground(1190, 600, 730, 20);
  bin1 = new Ground(495,440,30,300);
  bin2 = new Ground(840,440,30,300);

  hero = new Hero(150,550,250);
 
}

function draw() {
  background(bg);
  Engine.update(engine);
  
  ground1.display();
  ground2.display();
  bin1.display();
  bin2.display();

  hero.display();

}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(hero.body,hero.body.position,{x:1130,y:11545});



}





}