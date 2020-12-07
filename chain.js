class Chain{
    constructor(body1,point1){
        var options = {
            bodyA: body1,
            pointB: point1,
            stiffness: 0.02,
            length: 10
        }
        this.chain = Matter.Constraint.create(options);
        this.pointB = point1
        World.add(world,this.chain);
    }

    fly(){
        this.chain.bodyA = null
    }

    display(){
        if(this.chain.bodyA){
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.pointB.x, this.pointB.y);
        }
    }



}