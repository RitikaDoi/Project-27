class bob
{

    constructor(x)
    {

        var options =
	 {
		
		restitution: 0.3,
		isStatic:false,
		density:1.2,
		friction:0.5

	
     }
     
     this.body = Bodies.circle(x,400,20, options);
     World.add(world,this.body);

    }

    display()
    {

        ellipseMode(RADIUS);
        fill("pink")
        ellipse(this.body.position.x, this.body.position.y, 20, 20);

    }

}