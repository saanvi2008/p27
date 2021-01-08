class rope{
  constructor(bodyA,bodyB,offsetX,offestY){

   this.offsetX = offsetX;
   this.offsetX = offestY;

    var options = {
      bodyA : bodyA,
      bodyB : bodyB,
      pointB: {x : this.offsetX, y : this.offestY},
    }

    this.rope = Constraint.create(options);
    World.add(world,this.rope); 

  }

  display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    var anchor = pointB.x + this.offsetX;
    var anchorY = pointB.y + this.offestY; 

    strokeWeight(3);
    line(pointA.x,pointA.y,anchor,anchorY);
  }
}