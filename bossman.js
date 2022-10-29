



function newImg(url,left,bottom) {
    let gameElements = document.createElement ('img')
    gameElements.src =url
    gameElements.style.position = 'fixed'
    gameElements.style.left = left + 'px'
    gameElements.style.bottom= bottom + 'px'
    document.body.append(gameElements)
    return gameElements
}

function createTheBossman(x,y) {
    const element = newImg('Images/AverageGameCharacter.webp')
    element.style.zIndex = 1;
}

function moveTheBossman (element) {
    element.style.position = 'fixed'

    function moveCoords(left,bottom){
        element.style.left= left + 'px'
        element.style.bottom= bottom = 'px'
    }

    function movesWithArrowKeys(left,bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        function moveCharacter(){
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'south'){
                y-=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'west'){
                x-=1
            }
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e){
            if (e.repeat) return;

            if (e.key === 'ArrowUp'){
                direction = 'North'
            }
            if(e.key === 'ArrowDown'){
                direction = 'South'
            }
            if(e.key === 'ArrowRight'){
                direction = 'East'
            }
            if(e.key === 'ArrowLeft'){
                direction = 'West'
            }
            callback(direction)
        })

        document.addEventListener ('keyup', function (e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveCoords,
        withArrowKeys: movesWithArrowKeys
    }
}


createTheBossman(10, 5)



