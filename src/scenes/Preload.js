
import Phaser from "phaser";

class Preload extends Phaser.Scene {

    constructor() {
        super ('PreloadScene');
    }

    preload() {
    this.load.tilemapTiledJSON('map', 'assets/map.json');
    this.load.image('ts-background', 'assets/Blue.png');
    this.load.image('ts-platform', 'assets/Terrain.png');

    this.load.spritesheet('player', 'assets/player/Run.png', {
        frameWidth: 32, frameHeight: 32
    })

    this.load.spritesheet('enemy', 'assets/enemy/Idle.png', {
        frameWidth: 64, frameHeight: 64
    })
    }

    create() {
        this.scene.start('PlayScene')
    }
}

export default Preload; 