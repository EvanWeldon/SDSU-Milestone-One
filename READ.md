This is a Platfromer type game.
I used the Phaser3 JS framework to create this game.
I seperated the sprites into a player, enemy SuperClass and enemy subclass (spike and saw) .js files for ease of access. Enemy.js handles properties for all enemies while spike.js and saw.js handle sprite specific attributes
I downloaded the assets from itch.io, artist credits are: 
The downloads were free but I donated to the artist.
Use the arrow keys to move left and right while using the space bar to jump. I have a jump counter set to 1 which allows for a double jump mechanic.
The object of the game is to run around the map collecting coins while evading enemy sprites. 
Falling off of the map at the bottom will result in player death and loss of coin counter.
Collisions with the enemy sprites will result in player taking damage. After the players Health bar depletes to 0, the player will die and lose their coin counter.