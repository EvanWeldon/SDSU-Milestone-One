
import Phaser from "phaser";

class Play extends Phaser.Scene {

    constructor() {
        super ('PlayScene');
    }

    create() {
    const map = this.createMap();
    const layers = this.createLayers(map);

    this.player = this.createPlayer();

    this.playerSpeed = 200;
    this.physics.add.collider(this.player, layers.platform);
    this.cursors = this.input.keyboard.createCursorKeys();
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


    update() {
       const { left, right} = this.cursors; 

       if(left.isDown) {
        this.player.setVelocityX(-this.playerSpeed)
       } else if (right.isDown) {
        this.player.setVelocityX(+this.playerSpeed)
       } else {
        this.player.setVelocityX(0);
       }
    }
}