// Possible states of the game
const GameStates = {
    INPROGRESS: "In Progress",
    XVICTORY: "X wins",
    OVICTORY: "O wins",
    TIE: "Tie"
}
let gameState = GameStates.INPROGRESS

const board = document.querySelectorAll('.grid-square')

// Possible states of a square
const SquareStates = {
    X: "X",
    O: "O",
    EMPTY: "empty"
}

const isTaken = (squareId) => {
    return isX(squareId) || isO(squareId)
}

const isX = (squareId) => {
    return !document.getElementById('ximg' + squareId).classList.contains('hidden')
}

const isO = (squareId) => {
    return !document.getElementById('oimg' + squareId).classList.contains('hidden')
}

const getSquare = (squareId) => {
    if (isX(squareId)){
        return SquareStates.X
    }
    else if (isO(squareId)){
        return SquareStates.O
    }
    else {
        return SquareStates.EMPTY
    }
}

const getTurnNumber = () => {
    turnNbr = 0
    for (let i = 0; i < board.length; i++){
        if (isTaken(i)){
            turnNbr++
        }
    }
    return turnNbr
}

const updateTurn = () => {
    if (gameState !== GameStates.INPROGRESS) {
        return
    }
    turnNbr = getTurnNumber()
    let turn = turnNbr % 2 === 0 ? "X" : "O"
    document.getElementById("turntxt").innerHTML = "It is " + turn + "'s turn."
}

const checkTie = () => {
    if (gameState !== GameStates.INPROGRESS) {
        return
    }
    let movesAvailable = false
    for (let i = 0; i < board.length && !movesAvailable; i++){
        movesAvailable = !isTaken(i)
    }
    if (!movesAvailable) { 
        console.log('Tie!')
        gameState = GameStates.TIE
    }
}

const checkVictory = (squareA, squareB, squareC) => {
    if (gameState !== GameStates.INPROGRESS) {
        return
    }
    if (getSquare(squareA) !== SquareStates.EMPTY &&
        getSquare(squareA) === getSquare(squareB) &&
        getSquare(squareB) === getSquare(squareC)) {
        console.log(getSquare(squareA) + ' wins!')
        gameState = isX(squareA) ? GameStates.XVICTORY : GameStates.OVICTORY
    }
}

const evaluateBoard = () => {
    checkVictory(0, 1, 2) // top row
    checkVictory(3, 4, 5) // middle row
    checkVictory(6, 7, 8) // bottom row
    checkVictory(0, 3, 6) // first column
    checkVictory(1, 4, 7) // middle column
    checkVictory(2, 5, 8) // last column
    checkVictory(6, 4, 2) // increasing slope
    checkVictory(0, 4, 8) // decreasing slope   
    checkTie()
    if (gameState !== GameStates.INPROGRESS) {
        let gameOver = "Game Over. "
        if (gameState === GameStates.XVICTORY) {
            gameOver += "X Wins!"
        }
        else if (gameState === GameStates.OVICTORY) {
            gameOver += "O Wins!"
        }
        else {
            gameOver += "Tie."
        }
        document.getElementById("turntxt").innerHTML = gameOver
    }
    else {
        updateTurn()
    }
}

evaluateBoard()
for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', (event) => {
        // If the game is over or the square is taken, nothing to do
        if (gameState !== GameStates.INPROGRESS || isTaken(i)) {
            return
        }
        let turnNbr = getTurnNumber()
        if (turnNbr % 2 === 0){
            console.log('X to square ' + i)
            document.getElementById('ximg' + i).classList.remove('hidden')
        }
        else if (turnNbr % 2 === 1){
            console.log('O to square ' + i)
            document.getElementById('oimg' + i).classList.remove('hidden')
        }
        evaluateBoard()
    }
);}

document.getElementById("reset").addEventListener("click", (event) => {
    for (let i = 0; i < board.length; i++){
        document.getElementById('oimg' + i).classList.add('hidden')
        document.getElementById('ximg' + i).classList.add('hidden')
    }
    gameState = GameStates.INPROGRESS
    evaluateBoard()
})

