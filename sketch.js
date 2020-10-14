
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    
    roof= new Roof(400,300,800,20);
    bob1= new Bob(440,500);
	bob2= new Bob(420,500);
	bob3= new Bob(400,500);
	bob4= new Bob(380,500);
	bob5= new Bob(360,500);
	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope3=new Rope(bob3.body,roof.body,-bobDiameter*2,0);
	rope4=new Rope(bob4.body,roof.body,-bobDiameter*2,0);
	rope5=new Rope(bob5.body,roof.body,-bobDiameter*2,0);
}
function draw(){
    background("pink");
    Engine.update(engine);
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();   
   roof.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
keyPressed();
   
}
function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(bob.body,bob.body.position,{x:55,y:-55});

}
}

