

//index page to import all of the needed phaser pages, create a canvas and order the pages to be loaded in correct sequence
import Phaser from "phaser";
import Play from "./scenes/Play";
import Start from "./scenes/Start";
import Preload from "./scenes/Preload";

const WIDTH = 800;
const HEIGHT = 600;
const SPRITE_POSITION = {x: WIDTH / 10, y: HEIGHT /2 }

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: SPRITE_POSITION
}


//arrow function to iterate through all of the scenes creating a new scene for each instance to be called below in the scene call
const Scenes = [Preload, Start, Play];

const createScenes = () => Scenes.map((Scene) => new Scene(SHARED_CONFIG))

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
    default: 'arcade',
    arcade: {
     //can uncomment this if i ever come back to it and re ad the debugger debug: true
    }
  },
  scene: createScenes()

};

if (process.env.FB_ENV || process.env.NODE_ENV === 'production') {
  FBInstant.initializeAsync().then(() => {
  new Phaser.Game(config);
  })
} else {
  new Phaser.Game(config);
}



