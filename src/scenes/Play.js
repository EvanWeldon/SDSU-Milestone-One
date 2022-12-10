
import Phaser from "phaser";

class Play extends Phaser.Scene {

    constructor() {
        super ('PlayScene');
    }

    create() {
    const map = this.createMap();
    const layers = this.createLayers(map);

    const player = this.createPlayer();

    this.physics.add.collider(player, layers.platform);
    }

    createMap() {
        const map = this.make.tilemap({key:'map'});
        map.addTilesetImage('background', 'ts-background');
        map.addTilesetImage('terrain', 'ts-platform');
        return map;
    }

    createLayers(map) {
        const tileset1 = map.getTileset('background');
        const tileset2 = map.getTileset('terrain');
        const background = map.createStaticLayer('background', tileset1 );
        const platform = map.createStaticLayer('platform', tileset2 );

        platform.setCollisionByExclusion(-1, true);

        
        return {background, platform};
    }

    createPlayer() {
        const player = this.physics.add.sprite(100, 250, 'player')
        player.body.setGravityY(500);
        player.setCollideWorldBounds(true);
        return player;
    }
}





export default Play; 