
// setTimeout(myAlert, 32000)
const gameOutcomes = {
    X: "X wins",
    Y: "Y wins",
    TIE: "Tie", 
    INPROGRESS: "In Progress"
}
const squareVals = {
    X: "X",
    O: "O",
    EMPTY: "empty"
}
const allGrids = document.querySelectorAll('.grid-square')
let outcome = gameOutcomes.INPROGRESS

document.getElementById("reset").addEventListener("click", (event) => {
    for (let i = 0; i < allGrids.length; i++){
        document.getElementById('oimg' + i).classList.add('hidden')
        document.getElementById('ximg' + i).classList.add('hidden')
    }
    outcome = gameOutcomes.INPROGRESS
    evaluateBoard()
})

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
        return squareVals.X
    }
    else if (isO(squareId)){
        return squareVals.O
    }
    else {
        return squareVals.EMPTY
    }

}

const checkVictory = (squareA, squareB, squareC) => {
    if (outcome !== gameOutcomes.INPROGRESS) {
        return
    }
    if (getSquare(squareA) !== squareVals.EMPTY &&
        getSquare(squareA) === getSquare(squareB) &&
        getSquare(squareB) === getSquare(squareC)) {
        console.log('Ladies and Gents we\'ve got a winner!')
        outcome = isX(squareA) ? gameOutcomes.X : gameOutcomes.O
    }
}

const checkTie = () => {
    if (outcome !== gameOutcomes.INPROGRESS) {
        return
    }
    let movesAvailable = false
    for (let i = 0; i < allGrids.length && !movesAvailable; i++){
        movesAvailable = !isTaken(i)
    }
    if (!movesAvailable) { 
        console.log('Ladies and Gents we\'ve got a tie!')
        outcome = gameOutcomes.TIE
    }
}

const checkForEndOfGame = () => {
    checkVictory(0, 1, 2) // top row
    checkVictory(3, 4, 5) // middle row
    checkVictory(6, 7, 8) // bottom row
    checkVictory(0, 3, 6) // first column
    checkVictory(1, 4, 7) // middle column
    checkVictory(2, 5, 8) // last column
    checkVictory(6, 4, 2) // increasing slope
    checkVictory(0, 4, 8) // decreasing slope   
    checkTie()
    if (outcome !== gameOutcomes.INPROGRESS) {
        let gameOver = "Game Over. "
        if (outcome === gameOutcomes.X) {
            gameOver += "X Wins!"
        }
        else if (outcome === gameOutcomes.O) {
            gameOver += "O Wins!"
        }
        else {
            gameOver += "Tie."
        }
        document.getElementById("turntxt").innerHTML = gameOver
    }
}

const getTurnNumber = () => {
    turnNbr = 0
    for (let i = 0; i < allGrids.length; i++){
        if (isTaken(i)){
            turnNbr++
        }
    }
    return turnNbr
}

const evaluateBoard = () => {
    let turnNbr = getTurnNumber()
    checkForEndOfGame()
    setTurn(turnNbr)
    return turnNbr;
}

const setTurn = (turnNbr) => {
    if (outcome !== gameOutcomes.INPROGRESS) {
        return
    }
    let turn = turnNbr % 2 === 0 ? "X" : "O"
    document.getElementById("turntxt").innerHTML = "It is " + turn + "'s turn."
}

evaluateBoard()
for (let i = 0; i < allGrids.length; i++) {
    allGrids[i].addEventListener('click', (event) => {
        if (outcome !== gameOutcomes.INPROGRESS) {
            console.log('game over baby i\'m not doing shit')
            return
        }
        if (isTaken(i)){
            console.log('boyfriend' + i + ' is off the table')
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





