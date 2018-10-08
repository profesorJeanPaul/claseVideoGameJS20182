function Ball( x, y, radius ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.direction = 1;
    this.speed = 2;

    this.update = function() {
        this.x += this.speed * this.direction;
        if( this.x + this.radius > WIDTH ) {
            this.direction = -1;
        }
        if(this.x - this.radius < 0 ) {
            this.direction = 1;
        }
    }

    this.render = function() {
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
    }
}