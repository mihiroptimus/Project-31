class Plinko{
    constructor(x, y){
    var options= {
        isStatic: true
    }
    this.body = Bodies.circle(x, y, 14, options);
    this.x = x;
    this.y = y;
    World.add(world, this.body);
    }

    display(){
      ellipseMode(CENTER);
      fill("white");
      ellipse(this.x + 5, this.y, 15);
    }
}