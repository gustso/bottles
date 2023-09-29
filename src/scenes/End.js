class End extends Phaser.Scene{

    constructor() {
        super("End");        
    }

    init(data){
        this.puntaje = data.puntaje;
    }

    preload() {
        this.load.image('broken', '../public/img/broken.png');
    }
    
    create() {
        this.add.image(300, 300, 'broken');
        console.log(this.puntaje);
    }
}

export default End;