class Player{
    constructor(x,y){
        this.x =x;
        this.y =y;

        this.body= Bodies.rectangle(x,y,10,30);
        this.image = loadImage("Pictures/player pictures/idle.gif");
        World.add(world,this.body);
    }

    display(){
                imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y)
    }
}