class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: { x: this.offsetX, y: this.offsetY }
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope);
    }

    display() {
        var Anchor1X = this.rope.bodyA.position.x
        var Anchor1Y = this.rope.bodyA.position.y

        var Anchor2X = this.rope.bodyB.position.x + this.offsetX
        var Anchor2Y = this.rope.bodyB.position.y + this.offsetY
        strokeWeight(4)
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    } 
}