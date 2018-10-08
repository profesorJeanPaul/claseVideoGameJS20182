function GameManager() {
    let gameObjects = [ 
        new Ball( 100, 100, 30 ), 
        new Ball( 800, 300, 20 ) 
    ]

    this.update = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.update();
        } );
    }

    this.render = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.render();
        } );
    }
}