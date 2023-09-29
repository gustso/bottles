class Play extends Phaser.Scene {

    constructor() {
        super("Play");
        this.control01=false; 
        this.puntaje = 0; 
    }

    preload() {
        this.load.image('bottle', '../public/img/Bottle.png');
    }

    create() {
        
        //bottle
        let b1 = this.add.image(100, 300, 'bottle').setInteractive();
        this.b2 = this.add.image(200, 300, 'bottle').setInteractive();
        this.b3 = this.add.image(300, 300, 'bottle').setInteractive();
        this.b4 = this.add.image(400, 300, 'bottle').setInteractive();
        this.b5 = this.add.image(500, 300, 'bottle').setInteractive();

        let aleatorio = Math.floor(10 * Phaser.Math.FloatBetween(0.1, 0.5));
        b1.on('pointerdown', () => {
            console.log(aleatorio);
            //se debe generar un ramdom y si es tanto el control cambia a true
            if (aleatorio === 1){
                this.control01 = true;
            console.log("muerto")            
            }               
            this.puntaje++;
            console.log(this.puntaje);
        })

        this.b2.on('pointerdown', () => {
            if (aleatorio === 2){
                this.control01 = true;
            console.log("muerto")}
            this.puntaje++;
            console.log(this.puntaje);
        })

        this.b3.on('pointerdown', () => {
            if (aleatorio === 3){
                this.control01 = true;
            console.log("muerto")}
            this.puntaje++;
            console.log(this.puntaje);
        })

        this.b4.on('pointerdown', () => {
            if (aleatorio === 4){
                this.control01 = true;
            console.log("muerto")}
            this.puntaje++;
            console.log(this.puntaje);
        })

        this.b5.on('pointerdown', () => {
            if (aleatorio === 5){
                this.control01 = true;
            console.log("muerto")}
            this.puntaje++;
            console.log(this.puntaje);
        })
    }
    
    update(){
        if (this.control01){
            console.log(this.b1);
            this.scene.start('End',{puntaje:this.puntaje});
        }
    }

};
export default Play;