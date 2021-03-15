
// setTimeout(myAlert, 32000)

const allGrids = document.querySelectorAll('.grid-square')

document.getElementById("reset").addEventListener("click", (event) => {
    for (let i = 0; i < allGrids.length; i++){
        document.getElementById('oimg' + i).classList.add('hidden')
        document.getElementById('ximg' + i).classList.add('hidden')
    }
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

const checkForEndOfGame = (turnNbr) => {
    if (turnNbr >= allGrids.length){
        console.log('out of turns, game over')
        return
    }
//if (check for win) {
    // if the same player has any win type, they win
    // win types
    // horizontal top
    // horizontal middle
    // horizontal bottom
    // vertical left
    // vertical middle
    // vertical right
    // forward slash
    // back slash
    // else draw
//}
}

const evaluateBoard = () => {
    turnNbr = 0
    for (let i = 0; i < allGrids.length; i++){
        if (isTaken(i)){
            turnNbr++
        }
    }
    console.log('Turn number is ' + turnNbr)
    setTurn(turnNbr)
    checkForEndOfGame(turnNbr)
    return turnNbr;
    // go thru allgrids and count number of turns
    // if beginning of game, say something about that
    // check for win
    // if end of game, say soemthing about that
}

const setTurn = (turnNbr) => {
    let turn = turnNbr % 2 === 0 ? "X" : "O"
    document.getElementById("turntxt").innerHTML = "It is " + turn + "'s turn."
}

evaluateBoard()
for (let i = 0; i < allGrids.length; i++) {
    allGrids[i].addEventListener('click', (event) => {
        if (isTaken(i)){
            console.log('boyfriend' + i + ' is off the table')
            return
        }
        if (turnNbr % 2 === 0){
            console.log('X to square ' + i)
            document.getElementById('ximg' + i).classList.remove('hidden')
        }
        else if (turnNbr % 2 === 1){
            console.log('O to square ' + i)
            document.getElementById('oimg' + i).classList.remove('hidden')
        }
        turnNbr = evaluateBoard()
    }
);}





