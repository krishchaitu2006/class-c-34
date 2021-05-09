const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(700,390,80,50);
    box2 = new Box(700,350,80,50);
    box3 = new Box(700,300,80,50);
    box4 = new Box(700,250,80,50);
    box5 = new Box(700,200,80,50);
    box6 = new Box(700,150,50,50);
    box7 = new Box(700,100,50,50);
    box8 = new Box(700,50,50,50);
    box9 = new Box(700,0,50,50);
    box10 = new Box(800,390,80,50);
    box11 = new Box(800,350,80,50);
    box12 = new Box(800,300,80,50);
    box13 = new Box(800,250,80,50);
    box14 = new Box(800,200,80,50);
    box15 = new Box(800,150,50,50);
    box16 = new Box(800,100,50,50);
    box17 = new Box(800,50,50,50);
    box18 = new Box(800,0,50,50);


    ground = new Ground(600,height,1200,20);

    ball = new Ball(550,200,50);
    
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Rope(ball.body,{x:450, y:100});
}

function draw(){
    
    background("blue");
    strokeWeight(5);
    stroke("red");
    fill("black");
    
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    ball.display();

    slingshot.display();
      
    
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}







