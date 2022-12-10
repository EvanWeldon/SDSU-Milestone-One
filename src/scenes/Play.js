
import Phaser from "phaser";
import Player from '../sprites/Player';
import Enemy from '../sprites/Enemy';

class Play extends Phaser.Scene {

    constructor() {
        super ('PlayScene');
    }

    create() {
    const map = this.createMap();
    const layers = this.createLayers(map);
    const player = this.createPlayer();
    const enemy = this.createEnemy();


    this.createEnemyCollider(enemy, {
        colliders: {
        platform : layers.platform
        }
    });


    
    this.createPlayerCollider(player, {
        colliders: {
        platform : layers.platform
        }
    });
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

    createEnemy() {
        return new Enemy (this, 200, 200,);
    }

    createEnemyCollider(enemy, {colliders}) {
        enemy
        .addCollider(colliders.platform);
    }

    createPlayerCollider(player, {colliders}) {
        player
        .addCollider(colliders.platform);
    }
}





export default Play; 