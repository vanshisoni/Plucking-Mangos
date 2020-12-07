class Block {
    constructor(x,y) {
      var options = {
          restitution: 0.6,
          friction: 0.3,
          density: 0.1
      }
      this.body = Bodies.rectangle(x,y,70,70,options);
      this.width = 70;
      this.height = 70;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      stroke("cyan");
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
