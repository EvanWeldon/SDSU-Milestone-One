
import Phaser from "phaser";

class Preload extends Phaser.Scene {

    constructor() {
        super ('PreloadScene');
    }

    preload() {
    this.load.tilemapTiledJSON('map', 'assets/map.json');
    this.load.image('ts-background', 'assets/Blue.png');
    this.load.image('ts-platform', 'assets/Terrain.png');
    }

    create() {
        this.scene.start('PlayScene')
    }
}

export default Preload; 