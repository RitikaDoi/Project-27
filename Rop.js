class rop
{

    constructor(bodyA, bodyB, offsetX, offsetY)
    {

      this.offsetX = offsetX;
      this.offsetY = offsetY;

      var rop_options =
      {

        //The 2 bodies which will be constrained.
        bodyA: bodyA,
        bodyB: bodyB,

        //Setting stiffness and length.
        stiffness: 0.04,
        length: 200,

        pointB: {x: this.offsetX, y: this.offsetY}

    }

    //Creating a constrained body called body.
    this.rop = constraint.create(rop_options);
    World.add(world, this.rop);

}

    display(posBx)
    {

        //Name spacing bodyA and bodyB position. 
        var posA = this.rop.bodyA.position;
        var posB = this.rop.bodyB.position;

        //Creating a line.
        strokeWeight(3);
        line(posA.x, posA.y, posBx, posB.y);
        posBx = posBx

    }


}