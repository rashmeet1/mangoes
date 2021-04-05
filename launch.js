class launch{
	constructor(body,anchor){
		var options={ 
            bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1,
		}
		
		this.bodyA=body;
		this.pointB=anchor;
		this.launcherObj=Constraint.create(options);
		World.add(world,this.launcherObj);
	}

	    attach(body){
	    this.launcherObj.bodyA=body;
		if(this.launcherObj.bodyA){
		}

	
		fly()
		{
			this.launcherObj.bodyA=null;
		}
	
		display()
		{
			if(this.launcherObj.bodyA)
			{
				var pointA=this.bodyA.position;
				var pointB=this.pointB
	
				strokeWeight(2);		
				line(pointA.x,pointA.y,pointB.x,pointB.y);
			}
		}
	}
}