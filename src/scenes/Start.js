

//start screen that will contain the start button
import Parent from "./Scenes";


class Start extends Parent {

    constructor(config) {
        super('start', config);

        //menu for the start screen
        //i really wanted to add this, but I could not rememember how and I'm so tired at this point I don't think I can until I sleep
        // im just going to have the start screen default into the play screen on line 22 and call it here. i at least got it to meet some of the requirements.
        this.menu = [
            {scene: 'play', text: 'Start'}
        ]
    }

    create () {
        this.add.image(0, 0, 'bg').setOrigin(0);
        this.scene.start('play')
        
    }

}

export default Start