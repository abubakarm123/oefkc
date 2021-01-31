class Stone{
    constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
            density:1.2
            }
            this.x = x
            this.y = y
            this.h = h
            this.w = w
            
            this.image=loadImage("images/stone.png")
            this.body=Bodies.rectangle(this.x,this.y,this.r/2, options);
            World.add(world, this.body);
		
}

display(){	
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    //rectMode(RADIUS)
    image(this.image, 235,420,30,30)
pop()
    
 
}
}