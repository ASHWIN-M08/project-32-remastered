const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// createing the variables for the project
var engine, world;
var stand1,stand2;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;
var block17,block18;
var slingShot,player;
var score=0;
var bg="bg.png";
var bgImg;






function preload() {
 polygon_img=loadImage("polygon.png");   
 getTime();
}

function setup() {

    createCanvas(1600, 600);
    engine = Engine.create();
    world = engine.world;
 
    stand1 = new Stand(1250,270,190,15);
    stand2 = new Stand(800,400,190,15);

    //blocks series 1 (1 to 9)
    block1 = new Block(740,373,30,40);
    block2 = new Block(770,373,30,40);
    block3 = new Block(800,373,30,40);
    block4 = new Block(830,373,30,40);
    block5 = new Block(860,373,30,40);
    block6 = new Block(830,333,30,40);
    block7 = new Block(800,333,30,40);
    block8 = new Block(770,333,30,40);
    block9 = new Block(800,293,30,40)

    //blocks series 2 (10 to 18)
    block10= new Block(1250,243,30,40);
    block11= new Block(1280,243,30,40);
    block12= new Block(1220,243,30,40);
    block13= new Block(1190,243,30,40);
    block14= new Block(1310,243,30,40);
    block15= new Block(1280,203,30,40);
    block16= new Block(1250,203,30,40);
    block17= new Block(1220,203,30,40);
    block18= new Block(1250,163,30,40);
    

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){

  if(bgImg){
  background(bgImg);
  }

 Engine.update(engine);
 
 
        
 // displaying lower and upper stands
 stand1.display();
 stand2.display();

 //displaying series 1

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();

 //displaying series 2 
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();

 // the images for the polygon
  imageMode(CENTER);
  image(polygon_img, polygon.position.x,polygon.position.y,40,40);

  //displaying the slingShot
  slingShot.display();
 
 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score();
 block18.score();
 
 drawSprites();

 textSize(25);
 text("SCORE :"+score,750,40);
}

//all the functions
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingShot.fly();
  }


  function keyPressed(){

    if(keyCode == 32){
    //Matter.Body.setPosition(this.polygon,{x:100,y:200});

    slingShot.attach(polygon.body);
      }
    }

    async function getTime(){

      var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
      console.log(response);
      
      var responsejson=await response.json();
      console.log(responsejson);
      
      var dateTime=responsejson.datetime;
      console.log(dateTime);
      
      var hour=dateTime.slice(11,13);
      console.log(hour)
      
      if(hour>06 && hour<=18)
      {
      bg="bg.png";
       }
       else
       {
       bg="bg2.jpg";
       }
      bgImg=loadImage(bg);
      }  
    