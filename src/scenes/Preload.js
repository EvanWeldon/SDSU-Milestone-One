

//page to keep all of the things I want phaser to preload into the game
import Phaser from "phaser";


class Preload extends Phaser.Scene {

    constructor(config) {
        super('preload');

        this.menu = [
            {scene: 'Play', text: 'Start'}
        ]
    }

    preload() {
        this.load.image('bg', 'assets/background.png');
        this.load.image('sprite' , 'assets/sprite.png');
        this.load.image('pipe', 'assets/pipe.png');
    }

    create () {
        this.scene.start('start');
    }

}

export default Preload; 