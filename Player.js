class Player{
    constructor(x,y){
        this.x =x;
        this.y =y;

        this.body= Bodies.rectangle(x,y,10,30,{restitution:0.1, frictionAir:0.08});
        this.image = loadImage("Pictures/player pictures/idle.gif");
        World.add(world,this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y);
        pop();
    }
}