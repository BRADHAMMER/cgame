class ground{
    constructor(x,y,width,height){
        var f ={
            isStatic:true
        }
        
        this.body = Bodies.rectangle (x,y,width,height,f)
        World.add(world,this.body)
        this.height = height;
        this.width = width;                      
    
    }
       display(){
       var pos = this.body.position
       fill("green");
     rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);
    }
    }