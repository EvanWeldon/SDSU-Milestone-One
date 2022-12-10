


export default anims => {
    anims.create({
        key: 'idle',
        frames: anims.generateFrameNames('player', {start:5, end:6}),
        frameRate: 5,
        repeat: -1
    })   

    anims.create({
        key: 'run',
        frames: anims.generateFrameNames('player', {start:0, end:12}),
        frameRate: 20,
        repeat: -1
    })
    
    anims.create({
        key: 'run',
        frames: anims.generateFrameNames('player', {start:6, end:8}),
        frameRate: 20,
        repeat: -1
    }) 
}