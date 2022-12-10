
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
    const playerZones = this.getPlayerZones(layers.playerZones);
    const player = this.createPlayer(playerZones.start);
    const enemies = this.createEnemies(layers.enemySpawns);


    this.createEnemyCollider(enemies, {
        colliders: {
        platform : layers.platform,
        player
        }
    });

    this.createEndOfGame(playerZones.end, player) 


    
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
        const playerZones = map.getObjectLayer('playerZone');
        const enemySpawns = map.getObjectLayer('enemySpawn');

        platform.setCollisionByExclusion(-1, true);

        
        return {background, platform, playerZones,  enemySpawns};
    }

    createPlayer(start) {
        return new Player(this, start.x, start.y);
    }

    createEnemies(spawnLayer) {

        return spawnLayer.objects.map(spawnPoint => {
            return new Enemy (this, spawnPoint.x, spawnPoint.y);
        })

       
    }

    createEnemyCollider(enemies, {colliders}) {
        enemies.forEach(enemy => {
            enemy
            .addCollider(colliders.platform)
            .addCollider(colliders.player)
        })

    }

    createPlayerCollider(player, {colliders}) {
        player
        .addCollider(colliders.platform);
    }

    getPlayerZones(playerZonesLayers) {
        const playerZones = playerZonesLayers.objects;
        return {
            start: playerZones.find(zone => zone.name === 'startZone'),
            end: playerZones.find(zone => zone.name === 'endZone' )
        }
    }

    createEndOfGame(end, player) {
        const endOfGame = this.physics.add.sprite(end.x, end.y, 'end')
         .setSize(5, 100)
         .setOrigin(1, 0);


        const endOverlap = this.physics.add.overlap(player, endOfGame, () => {
            endOverlap.active = false;
            console.log('You Have Won the Game!')
        })   
    }
}





export default Play; 