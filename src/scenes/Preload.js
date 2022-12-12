

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

        const isProd = process.env.FB_ENV || process.env.NODE_ENV === 'production';

        this.load.on('progress', value => {
            isProd && FBInstant.setLoadingProgress(value * 100);
        })

        this.load.once('complete', () => {
            if(isProd) {
                  FBInstant.startGameAsync().then(() => {
                this.startGame();
                })
            } else {
                this.startGame();
            }
          
        })
    }

    startGame() {
        this.scene.start('start');
    }

}

export default Preload; 