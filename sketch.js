var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof,chain,rope;
var bobDiameter;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint; 


function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,200);
	bobObject2= new Bob(300,200);
	bobObject3= new Bob(400,200);
	bobObject4= new Bob(500,200);
	bobObject5= new Bob(600,200);

	roof= new Roof(width/2,100,width,20);

    rope1=new Rope(bobObject1.body,roof.body,-60*2,0)
	rope2=new Rope(bobObject2.body,roof.body,-30*2,0)
    rope3=new Rope(bobObject3.body,roof.body,-0*2,0)
    rope4=new Rope(bobObject4.body,roof.body, 30*2,0)
    rope5=new Rope(bobObject5.body,roof.body, 60*2,0)

    

   	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();

    
    roof.display();
    rope1.display();
    rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
 }

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x :-50 ,y:-50});
	}
}



