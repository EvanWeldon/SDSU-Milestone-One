const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

const map1 = new Image()
map1.src = './img/map1.png'


const player = new Image()
player.src = './img/player.png'

//new class to create a constructor method for the imagages I want to manipulate movement on
class Animate {
    constructor({ position, image }) {
        this.position = position
        this.image = image
    }

    create() {
        context.drawImage(this.image, this.position.x, this.position.y)
    }
}
const player1 = new Animate({
    position: {
        x: 100,
        y: 250
    },
    image: player
})


const keyPress = {
    wpressed: false,
    spressed: false,
    dpressed: false,
    apressed: false
}
// put everything into a movement function so that I could just infinite loop the drawing of the map and player to be able to manipulate "movenemt" on event listeners
function move() {
    window.requestAnimationFrame(move)
    player1.create()
    // context.drawImage(map1, 0, 0, canvas.width, canvas.height)
}
move()

function changePosition() {
    if (keyPress.wpressed) {
        player1.position.y = player1.position.y + 3
    }
    if (keyPress.spressed) {
        player1.position.y = player1.position.y - 3
    }
    if (keyPress.apressed) {
        player1.position.x = player1.position.x - 3
    }
    if (keyPress.dpressed) {
        player1.position.x = player1.position.x + 3
    }
}

//learning how switch case works with event listeners
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            keyPress.wpressed = true
            break
        case 's'
            : keyPress.spressed = true
            break
        case 'a'
            : keyPress.apressed = true
            break
        case 'd'
            : keyPress.dpressed = true
    }
    changePosition ()
})


window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            keyPress.wpressed = false
            break
        case 's'
            : keyPress.spressed = false
            break
        case 'a'
            : keyPress.apressed = false
            break
        case 'd'
            : keyPress.dpressed = false
            break
    }
})