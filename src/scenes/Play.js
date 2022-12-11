
import Phaser from "phaser";

class Play extends Phaser.Scene {
    
    constructor() {
        super('Play');
    }

    preload() {
        this.load.image('blue', 'assets/terrain.png');
    }

    create() {
        this.add.image(0, 0, 'blue').setOrigin(0);
    }


}

export default Play