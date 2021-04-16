class Drops{
    constructor(x,y)
    {
        var options={
            friction:0.1,
            restitution:1
        }

        this.rainDrops=Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.rainDrops);
    }
    
    update(){
        if(this.rainDrops.position.y>height){
            Matter.Body.setPosition(this.rainDrops,{
                x:random(0,400 ),y:random(0,400)
            })
        }
    }

    display(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rainDrops.position.x,this.rainDrops.position.y,this.radius,this.radius);
    }

}