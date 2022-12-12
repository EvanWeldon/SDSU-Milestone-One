

//main page to conatain the majority of functionality of the game
import Parent from "./Scenes";

const pipes = 4;

class Play extends Parent  {
    //create variables for all game objects and things i need to manipulate
    constructor(config) {
        super('play', config);

        this.sprite = null;
        this.allPipes = null;

     //changing range between the two pipes and create random spawn points up and down
        this.pipeSpace = 0;
        this.pipeRange = [100, 250];
        this.pipeSPaceRange = [500, 600]
        this.move = 300;
        //add a score feature
        this.score = 0;
        this.scoreText = '';
    }

    //preload the assets into the scene

    //create the assets on the actual canvas with a function for each in the function sections at the bottom
    create() {
        super.create();
        this.player();
        this.pipes();
        this.colliders();
        this.scoreCounter();
        this.jump();

    }

    //update every 60s to refresh game state, use this for updating to check on refreshing pipes and checking for player hitting no go zones
    update() {
        this.isGameOver();
          this.recycle();
    }

    //all of the functions I am calling in my phaser create function above
    background() {
        this.add.image(0, 0, 'bg').setOrigin(0, 0);
    }

    player() {
        this.sprite = this.physics.add.sprite(this.config.startPosition.x, this.config.startPosition.y, 'sprite').setOrigin(0);
        this.sprite.body.gravity.y = 500;
        this.sprite.setCollideWorldBounds(true);
    }
    
    pipes() {
        this.allPipes = this.physics.add.group();

        for (let i = 0; i < pipes; i ++) {
          const pipe = this.allPipes.create(0, 0, 'pipe').setOrigin(0, 1)
          .setImmovable(true)
          const pipe1 = this.allPipes.create(0, 0, 'pipe').setOrigin(0,0)
          .setImmovable(true)

          this.pipePlacement(pipe, pipe1) 
        }
        
        this.allPipes.setVelocityX(-200);
    }

    //create colliders with the sprite and the pipes
    colliders() {
        this.physics.add.collider(this.sprite, this.allPipes, this.gameOver, null, this);
    }

    jump() {
        this.input.keyboard.on('keydown_SPACE', this.spaceBarJump, this);
    }

    scoreCounter() {
        this.score = 0;
        this.scoreText = this.add.text(10, 10, `Score ${0}`, {fontSize: '30px', fill: '#000'})
    }

    //function for spawning pipes on map randomly between the specified ranges 
 pipePlacement (firstPipe, secondPipe) {
    const furthestPipe = this.getPipe();
    const pipeSpan = Phaser.Math.Between(...this.pipeRange);
    const pipeSpawn = Phaser.Math.Between(0 + 30, this.config.height -30 - pipeSpan);
    const pipeSpace = Phaser.Math.Between(...this.pipeSPaceRange);
  
    firstPipe.x = furthestPipe + pipeSpace;
    firstPipe.y = pipeSpawn;
  
    secondPipe.x = firstPipe.x;
    secondPipe.y = firstPipe.y + pipeSpan
  }
  
  //as the pipe moves all the way to the left, get the pipe and restart its position back to the right so they will all be refreshed on an infinite loop
   recycle () {
    const recycled = [];
    this.allPipes.getChildren().forEach(pipe => {
      if(pipe.getBounds().right <= 0) {
        recycled.push(pipe); 
        if (recycled.length === 2) {
          this.pipePlacement(...recycled);
          this.getScore();
        }
      }
    })
}

//if player goes above or below the canvas I want the game to be over/lost restarting the game
 gameOver() {
        this.physics.pause();
        this.sprite.setTint(0xff0000);

        this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.scene.restart();
            },
        loop: false
        })
    }

  //using the space bar for jumping in opposite direction of gravity
   spaceBarJump () {
    this.sprite.body.velocity.y = - this.move;
  }

  //checking the position of the player and calling gameOver if player touches the top or bottom of canvas
  isGameOver() {
    if (this.sprite.getBounds().bottom >= this.config.height || this.sprite.y <=  0) {
        this.gameOver();
      }
  }
  
  getScore() {
    this.score ++;
    this.scoreText.setText(`Score: ${this.score}`)
  }
    
    //get the furthest pipe to the right
   getPipe() {
    let furthestPipe = 0;
  
    this.allPipes.getChildren().forEach(function(pipe) {
      furthestPipe = Math.max(pipe.x, furthestPipe);
    })
    return furthestPipe;
  }
}


export default Play; 