class roof 
{
    
    constructor() 
    {
      
        var options = 
        {
          
            isStatic: true
      
        }
     
        this.body = Bodies.rectangle(600, 50, 300, 20,options);
        this.width = 300;
        this.height = 20;
        World.add(world, this.body);
    
    }
    
    display()
    {
      
        var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    
    }
  
};