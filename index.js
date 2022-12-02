// creating the canvas for the games map and rendering it to 2d and setting it to dimensions that render on most screens
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

// creating a const for the level one map and player and importing the sources
const map1 = new Image()
map1.src = './img/map1.png'

const player = new Image()
player.src = './img/player.png'

//new class to create a constructor method for the imagages I want to manipulate movement on
class Phil {
    constructor({position, image }) {
        this.position = position
        this.image = image
    }

    create() {
        context.drawImage(this.image, 0, 0, canvas.width, canvas.height)
    }
}

const map01 = new Phil ({position:{
    x:0,
    y:0
},
image: map1
})

// put everything into a movement function so that I could just infinite loop the drawing of the map and player to be able to manipulate "movenemt" on event listeners
function movement () {
    window.requestAnimationFrame(movement)
    map01.create ()
    context.drawImage(player, canvas.width / 2, 0)
}
movement()

//learning how switch case works with event listeners
window.addEventListener('keydown', (event) => {
    switch (event.key){
        case 'w':
        console.log('i pressed w')
        break
        case 's'
        :console.log('i pressed s')  
        break     
        case 'a'
        :console.log('i pressed a')  
        break
        case 'd'
        :console.log('i pressed d')  
        break                           
}

})
