
let board = [null,null,null,null,null,null,null,null,null]

//event listeners
const topLeft = document.querySelector('#top-left')
const topMiddle = document.querySelector('#top-middle')
const topRight = document.querySelector('#top-right')
const middleLeft = document.querySelector('#middle-left')
const middleMiddle = document.querySelector('#middle-middle')
const middleRight = document.querySelector('#middle-right')
const bottomLeft = document.querySelector('#bottom-left')
const bottomMiddle = document.querySelector('#bottom-middle')
const bottomRight = document.querySelector('#bottom-right')
const turn = document.querySelector('#turn')
const resetButton = document.querySelector('#reset')
const winner = document.querySelector('#winner')
let drawCounter = 9


// Player Functions
const play = (player) => {                                       
    topLeft.addEventListener('click', (e) => {
        if(e.target.innerText === '' && board[0] === null) {
            e.target.innerText = currentPlayer
            drawCounter++
            board[0] = currentPlayer
            switchPlayer(currentPlayer)
            winCondition() 
            draw()  
            turn.innerText = `Player Turn: ${currentPlayer}`     
        }
    })
   topMiddle.addEventListener('click', (e) => {
       if(e.target.innerText === '' && board[1] === null) {
           e.target.innerText = currentPlayer
           drawCounter++
           board[1] = currentPlayer
           switchPlayer(currentPlayer)
           winCondition()
           draw()  
           turn.innerText = `Player Turn: ${currentPlayer}` 
       }
    })
    topRight.addEventListener('click', (e) => {
        if(e.target.innerText === '' && board[2] === null) {
            e.target.innerText = currentPlayer
            drawCounter++
            board[2] = currentPlayer
            switchPlayer(currentPlayer)
            winCondition()
            draw()  
            turn.innerText = `Player Turn: ${currentPlayer}`         
        }
    })
    middleLeft.addEventListener('click', (e) => {
        if(e.target.innerText === '' && board[3] === null) {
            e.target.innerText = currentPlayer
            drawCounter++
            board[3] = currentPlayer
            switchPlayer(currentPlayer)
            winCondition()
            draw()  
            turn.innerText = `Player Turn: ${currentPlayer}`         
        }
    })
    middleMiddle.addEventListener('click', (e) => {
        if(e.target.innerText === '' && board[4] === null) {
            e.target.innerText = currentPlayer
            drawCounter++
            board[4] = currentPlayer
            switchPlayer(currentPlayer)
            winCondition()
            draw()  
            turn.innerText = `Player Turn: ${currentPlayer}`         
        }
     })
    middleRight.addEventListener('click', (e) => {
        if(e.target.innerText === '' && board[5] === null) {
            e.target.innerText = currentPlayer
            drawCounter++
            board[5] = currentPlayer
            switchPlayer(currentPlayer)
            winCondition()
            draw()  
            turn.innerText = `Player Turn: ${currentPlayer}`         
        }
    })
    bottomLeft.addEventListener('click', (e) => {
        if(e.target.innerText === '' && board[6] === null) {
            e.target.innerText = currentPlayer
            drawCounter++
            board[6] = currentPlayer
            switchPlayer(currentPlayer)
            winCondition()
            draw()  
            turn.innerText = `Player Turn: ${currentPlayer}`         
        }
    })
    bottomMiddle.addEventListener('click', (e) => {
        if(e.target.innerText === '' && board[7] === null) {
            e.target.innerText = currentPlayer
            drawCounter++
            board[7] = currentPlayer
            switchPlayer(currentPlayer)
            winCondition()
            draw()  
            turn.innerText = `Player Turn: ${currentPlayer}` 
        }
    })
    bottomRight.addEventListener('click', (e) => {
        if(e.target.innerText === '' && board[8] === null) {
            e.target.innerText = currentPlayer
            drawCounter++
            board[8] = currentPlayer
            switchPlayer(currentPlayer)
            winCondition()
            draw()  
            turn.innerText = `Player Turn: ${currentPlayer}` 
        }
    })
}

// reset button
const reset = () => {
    for(let i = 0; i < board.length; i++) {
        board[i] = null
    }
}
resetButton.addEventListener('click', () => {
    let topRow = document.querySelectorAll('.top-row')
    topRow.forEach(box  => {
        box.innerText = ''
    })
    let middleRow = document.querySelectorAll('.middle-row')
    middleRow.forEach(box => {
        box.innerText = ''
    })
    let bottomRow = document.querySelectorAll('.bottom-row') 
    bottomRow.forEach(box => {
        box.innerText = ''
    })
    turn.innerText = `Player Turn: ${currentPlayer}`
    winner.innerText =''
    drawCounter = 0
    reset()
    play()
})


const winCondition = () => {
    //straight across
    if(board[0] === board[1] && (board[0]=== board[2]) && (board[0] != null)) {
        winner.innerText = board[0] + ' won!'
        return true
    }
    if(board[3] === board[4] && (board[3]=== board[5]) && (board[3] != null)) {
        winner.innerText = board[3] + ' won!'
        return true
    }
    if(board[6] === board[7] && (board[6]=== board[8]) && (board[6] != null)) {
        winner.innerText = board[6] + ' won!'
        return true
    }
    // straight down
    if(board[0] === board[3] && (board[0]=== board[6]) && (board[0] != null)) {
        winner.innerText = board[0] + ' won!'
        return true
    }
    if(board[1] === board[4] && (board[1]=== board[7]) && (board[1] != null)) {
        winner.innerText = board[1] + ' won!'
        return true
    }
    if(board[2] === board[5] && (board[2]=== board[8]) && (board[2] != null)) {
        winner.innerText = board[2] + ' won!'
        return true
    }
    // straight down
    if(board[0] === board[4] && (board[0]=== board[8]) && (board[0] != null)) {
        winner.innerText = board[0] + ' won!'
        return true
    }
    if(board[2] === board[4] && (board[2]=== board[6]) && (board[2] != null)) {
        winner.innerText = board[2] + ' won!'
        return true
    }
    else {
        return false
    }
}


// switch player function 
const switchPlayer = (player) => {
    if(player === 'X') {
        // console.log('player')
        currentPlayer = 'O'
        // console.log(currentPlayer)
    }
    else {
        currentPlayer = 'X'
    }
}
// draw Check 
const draw = () => {
    if(drawCounter === 9 && (!winCondition())) {
        winner.innerText = 'Draw! Press Reset to play again'
    }
}

let currentPlayer = 'X'
turn.innerText = `Player Turn: ${currentPlayer}`
play()

