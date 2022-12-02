// creating the canvas for the games map and rendering it to 2d and setting it to dimensions that render on most screens
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576


// creating a const for the level one map and importing the source
const mapLevelOne = new Image()
mapLevelOne.src = './img/mazeLevle1.png'
console.log(image)

context.drawImage()