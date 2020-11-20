class Stone{
    constructor(x,y,width,height){
        this.x =x;
        this.y =y;
        this.width = width;
        this.height = height;

        this.body= Bodies.rectangle(x,y,width,height,{isStatic:true, restitution: 0.1});
        this.image = loadImage("Pictures/cobbleStone.png");
        World.add(world,this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width/2, this.height);
        pop();
    }
}