
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
    this.createPlayer();
    }

    createPlayer() {
        const player = this.physics.add.sprite(100, 250, 'player')
        player.body.setGravity(500);
    }
}





export default Play; 