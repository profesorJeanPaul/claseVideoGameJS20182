function Ship( x, y, w, h ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.update = function( ) {

    }

    this.render = function( ) {
        ctx.fillRect( this.x, this.y, this.w, this.h );
    }
}