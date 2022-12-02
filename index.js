// creating the canvas for the games map and rendering it to 2d and setting it to dimensions that render on most screens
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 2000
canvas.height = 2000

// creating a const for the level one map and importing the source
const map1 = new Image()
map1.src = './img/map1.png'
console.log(map1)

map1.onload = () => {
    context.drawImage(map1, 0, 0)
}