const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   
    hammer = new Hammer(10,100);
    rubber = new Rubber(10,100,r)
    plane =  new Plane(100,100,20,150)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


   
    hammer.display();
    rubber.display();
    plane.display();
 
}