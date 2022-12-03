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
        context.drawImage(this.image, 0, 0, this.position.x, this.position.y)
    }
}

const map01 = new Phil ({position:{
    x:1000,
    y:500
},
image: map1
})

const keyPress = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }

}
// put everything into a movement function so that I could just infinite loop the drawing of the map and player to be able to manipulate "movenemt" on event listeners
function movement () {
    window.requestAnimationFrame(movement)
    map01.create ()
    context.drawImage(player, canvas.width / 2, 0)

   if (keyPress.w.pressed) {
    map01.position.y = map01.position.y - 5
    console.log(map01.position.y)
   }

}
movement()

//learning how switch case works with event listeners
window.addEventListener('keydown', (event) => {
    switch (event.key){
        case 'w':
        keyPress.w.pressed = true
        break
        case 's'
        :keyPress.s.pressed = true  
        break     
        case 'a'
        :keyPress.a.pressed = true  
        break
        case 'd'
        :keyPress.d.pressed = true
        break                           
}
})

window.addEventListener('keyup', (event) => {
    switch (event.key){
        case 'w':
        keyPress.w.pressed = false
        break
        case 's'
        :keyPress.s.pressed = false 
        break     
        case 'a'
        :keyPress.a.pressed = false
        break
        case 'd'
        :keyPress.d.pressed = false
        break                           
}
})