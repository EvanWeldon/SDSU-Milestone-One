
import Phaser from "phaser";
import Colliders from '../mixins/colliders'


class Enemy extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'enemy');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        Object.assign(this, Colliders);

        this.init();
    }

    init() {
        this.gravity = 500;
        this.speed = 200;
        this.body.setGravityY(500);
        this.setCollideWorldBounds(true);
        this.setOrigin(0.5, 1);
    }




}



export default Enemy;