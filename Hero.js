class Hero {
  constructor(x,y,r)
	{
		var options = { 
	    isStaic:false,
		restitution:2,
		friction:0,
		density:1.2,
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("crumpled-paper-png-3.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y+20);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+10, this.r)
			pop()
			
	}
}


