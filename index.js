const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

const character = newImage('./img/player.png')
let direction = null;
let x = 100;
let y = 250;

const map1 = newImage('./img/map1.png')
let position = null;

setInterval (function moveCharacter (){
    if(direction === 'west') {
    x = x - 1
    }
    if(direction === 'north') {
    y = y + 1
    }
    if(direction === 'east') {
    x = x + 1
    }
    if(direction === 'south') {
    y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)

document.addEventListener ('keydown', function (e) {
    if(e.repeat) return;

    if(e.key ==='ArrowLeft') {
        direction = 'west'
    }
    if(e.key === 'ArrowUp') {
        direction = 'north'
    }
    if(e.key === 'ArrowRight') {
        direction = 'east'
    }
    if(e.key === 'ArrowDown') {
        direction = 'south'
    }

})

document.addEventListener ('keyup', function(e){
    direction = null
})


move(character).to(100, 250)