import Play from "./scenes/Play.js";
import End from "./scenes/End.js";

//const puntaje = 0;
const Escenas = [Play, End];
const crearEscena = (Scene) => new Scene();
const iniciarEscena = () => Escenas.map(crearEscena);

let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    //scene: [Play, End]
    scene: iniciarEscena()
};

let game = new Phaser.Game(config);
