function move (element) {
    element.style.position ='fixed'

    function moveToCOordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'

    }

    return {
        to: moveToCOordinates
    }
}