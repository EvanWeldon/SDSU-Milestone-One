
//a page to act as a parent class for things I want all the pages to have

import Phaser from "phaser";


class Parent extends Phaser.Scene {

    constructor(key, config) {
        super(key);
        this.config = config;
        //menu for the start screen
        this.menu = [
            {scene: 'play', text: 'Start'}
        ]
    }

    create () {
        this.add.image(0, 0, 'bg').setOrigin(0);
    }
    

}

export default Parent; 