
import Phaser from "phaser";

class Play extends Phaser.Scene {

    constructor() {
        super ('PlayScene');
    }

    create() {
    const map = this.make.tilemap({key:'map'});
    const tileset1= map.addTilesetImage('background', 'ts-background');
    const tileset2= map.addTilesetImage('terrain', 'ts-platform');

    map.createStaticLayer('background', tileset1 );
    map.createStaticLayer('platform', tileset2 );
    }
}

export default Play; 