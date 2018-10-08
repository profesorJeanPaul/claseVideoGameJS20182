// Define el lienzo
const canvas = document.getElementById( "canvas" );
// Define el pincel
const ctx = canvas.getContext( "2d" );
// Declara la colección de teclas a recibir
const PRESSED_KEYS = [ ];
// Declara constantes
const WIDTH = 800;
const HEIGHT = 600;

// Configura el lienzo y el pincel
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.backgroundColor = "#d9f2ff";
ctx.fillStyle = "#77529e";
ctx.strokeStyle = "#77529e";

// Crea entidades del juego
var stopMain;
const gameManager = new GameManager( );

// Captura las teclas presionadas por el usuario
document.addEventListener( "keydown", function( key ) {
    console.log( "Se presiono la tecla: ", key.key)
    PRESSED_KEYS[ key.keyCode ] = true;
} );

document.addEventListener( "keyup", function( key ) {
    PRESSED_KEYS[ key.keyCode ] = false;
} );

// Ejecuta el Ciclo del juego
;( function( ) {
    function main( tFrame ) {
        stopMain = window.requestAnimationFrame( main );
        // Llama al método de actualización, indica en que frame esta
        update( tFrame ); 
        render();
    }
    main(); // Comienza el ciclo
} ) ( );

function update( frame ) {
    gameManager.update( );
}

function render() {
    // Borrar todo lo de la pantalla
    ctx.clearRect( 0, 0, WIDTH, HEIGHT );
    // Dibuja las entidades del juego
   gameManager.render( );
}