class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true,
        }
        this.walk1 = loadImage("Walking Frame/walking_1.png");
        this.walk2 = loadImage("Walking Frame/walking_2.png");
        this.walk3 = loadImage("Walking Frame/walking_3.png");
        this.walk4 = loadImage("Walking Frame/walking_4.png");
        this.walk5 = loadImage("Walking Frame/walking_5.png");
        this.walk6 = loadImage("Walking Frame/walking_6.png");
        this.walk7 = loadImage("Walking Frame/walking_7.png");
        this.walk8 = loadImage("Walking Frame/walking_8.png");

        this.umbrella = Bodies.circle(x,y,50,options);
        World.add(world,this.umbrella);
        this.radius=50;


    }
    display(){
        imageMode(CENTER);
        image(this.walk1,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
        /*image(this.walk2,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
        image(this.walk3,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
        image(this.walk4,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
        image(this.walk5,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
        image(this.walk6,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
        image(this.walk7,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
        image(this.walk8,this.umbrella.position.x,this.umbrella.position.y+70,300,300);*/
    }
}