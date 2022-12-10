
import Phaser from "phaser";

class Play extends Phaser.Scene {

    constructor() {
        super ('PlayScene');
    }

    create() {
    const map = this.createMap();
    this.createLayers(map);
    this.createPlayer();
    }

    createMap() {
        const map = this.make.tilemap({key:'map'});
        const tileset1= map.addTilesetImage('background', 'ts-background');
        const tileset2= map.addTilesetImage('terrain', 'ts-platform');
        return map;
    }

    createLayers(map) {
        const tileset1 = map.getTileset('background');
        const tileset2 = map.getTileset('terrain');
        map.createStaticLayer('background', tileset1 );
        map.createStaticLayer('platform', tileset2 );
        return {tileset1, tileset2}
    }

    createPlayer() {
        const player = this.physics.add.sprite(100, 250, 'player')
        player.body.setGravityY(500);
        player.setCollideWorldBounds(true);
    }
}





export default Play; 