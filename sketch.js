const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var plinkos = [];
var particles = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 800, 900, 10);

  for(var d = 0; d <= width; d = d + 80){
    divisions.push(new division(d, 700, 10, 200));
  }  
  for(var p = 0; p <= width; p = p + 40){
    plinkos.push(new Plinko(p, 120));
  }
  for(var p = 0; p <= width; p = p + 60){
    plinkos.push(new Plinko(p, 220));
  }
  for(var p = 0; p <= width; p = p + 40){
    plinkos.push(new Plinko(p, 320));
  }
  for(var p = 0; p <= width; p = p + 60){
    plinkos.push(new Plinko(p, 420));
  }
Engine.run(engine);
}

function draw() {
  background("black");
  ground.display();

    if(frameCount%60 === 0){
      particles.push(new Particle(random(width/2 - 10, width/2 + 10), 5, 5));
    }
    for(var i = 0; i < plinkos.length; i++){
      plinkos[i ] .display();
    }
    for(var i = 0; i < divisions.length; i++){
      divisions[i ] .display();
    }
    for(var i = 0; i < particles.length; i++){
      particles[i ] .display();
    }
  
  drawSprites();                                                                   
}