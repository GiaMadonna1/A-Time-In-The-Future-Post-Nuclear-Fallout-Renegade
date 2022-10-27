function newImg(url,left,bottom) {
    let gameElements = document.createElement ('img')
    gameElements.src =url
    gameElements.style.position = 'fixed'
    gameElements.style.left = left + 'px'
    gameElements.style.bottom= bottom + 'px'
    document.body.append(gameElements)
    return gameElements
}

function theBackground(url, left, bottom) {
    let newBackground = newImg(url, left, bottom)
}


newImg('Images/AverageGameCharacter.webp', 10, 5)