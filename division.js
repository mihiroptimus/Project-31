class division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      fill("white");
      rectMode(CENTER);
      rect(pos.x+ 20, pos.y, this.width, this.height);
    }
  };
