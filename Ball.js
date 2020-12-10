class Ball {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0
      };
      this.body = Bodies.circle(x, y, 40, options);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      ellipseMode(RADIUS)
      ellipse(0,0,40,40)
      pop();
    };
  };