class Partical{
    constructor(){
        this.color = {
            r: Math.round(random(128,255)), 
            g: Math.round(random(128,255)), 
            b: Math.round(random(128,255))
        };
        this.body = Bodies.circle(random(50,750),0,10);
        World.add(world,this.body); 
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill(this.color.r, this.color.g, this.color.b)
        ellipse(0,0,10)
        ellipse(0,0,10);
        pop();
    }
}