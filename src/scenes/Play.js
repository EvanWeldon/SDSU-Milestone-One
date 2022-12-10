
import Phaser from "phaser";
import Player from '../sprites/Player';

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
        return new Player(this, 100, 250,);
    }

}





export default Play; 