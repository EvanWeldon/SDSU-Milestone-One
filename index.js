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


// arrow function to render the map onload *image is fit to canvas height and width by passing in more arguments* 
//having trouble placing the player in correct spot so just threw him in the middle of canvas for now
map1.onload = () => {
    context.drawImage(map1, 0, 0, canvas.width, canvas.height)
    context.drawImage(player, canvas.width / 2, 0)
}

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