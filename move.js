function move(element) {
    element.style.position = 'fixed'

    function moveToChoordinates(left, bottom) {
        element.style.position = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToChoordinates
    }
}