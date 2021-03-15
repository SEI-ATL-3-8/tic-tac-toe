// 1. decide which player's turn it is
// 2. when player clicks square, add x or o
// 3. check board state for a win
// 4. if no win, contine, if win, display the win

const board = document.querySelector('.container')
const cells = document.querySelectorAll('.gameCells')
const playerTurnDiv = document.querySelector('.playerTurn')
const scoreBoard = document.querySelector('.scoreBoard')
const reset = document.querySelector('.reset')
let firstPlayer = true
let boardState = ["", "", "", "", "", "", "", "", ""]

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

reset.addEventListener('click', () => {
    
    clearBoard()
   
   


})

function clearBoard() {
    // this kinda worked but had a bug 
    // for (let i = 0; i < cells.length; i++) {
    //     cells[i].innerHTML = ""
    //     cells[i].style.pointerEvents = null
        
    // }
    
    // playerTurnDiv.innerHTML = "Player turn: x"
    // scoreBoard.innerHTML = ""
    // board.style.pointerEvents = null
    // boardState = ["", "", "", "", "", "", "", "", ""]

    // console.log(firstPlayer)
    location.reload();

}

function startGame() {
    
    setEventListeners();
}

function setEventListeners() {
    
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", () => {
            playerAction(i)
        })
    }
    
}

function preventClick(i) {
    cells[i].style.pointerEvents = "none"
    
}

function paintPlayerTurn() {
    if (firstPlayer === true) {
        playerTurnDiv.innerHTML = "Player turn: o"
    } else {
        playerTurnDiv.innerHTML = "Player turn: x"
    }
    
}



function playerAction(i) {
    paintPlayerTurn()
    
    if (firstPlayer === true) {
        cells[i].classList.add('x')
        boardState[cells[i].id] = "x"
        preventClick(i)
    } else {
        cells[i].classList.add("o")
        boardState[cells[i].id] = "o"
        preventClick(i)
    }

    const playerHasWon = checkForWin();

    if (playerHasWon) {
        const player = firstPlayer ? "x" : "o"
        scoreBoard.innerHTML =  `Player ${player} wins!`

        board.style.pointerEvents = "none";
        firstPlayer === true
    } else if(playerHasWon === false) {
        
        checkForTie()
        
        firstPlayer = !firstPlayer
        
    }
    
}


function checkForTie() {
    if (boardState.includes("") === false) {
        scoreBoard.innerHTML = "It's a tie!"
    }
}

function checkForWin() {
    const player = firstPlayer ? "x" : "o"

    return wins.some(combination => {
        return combination.every(i => {
            return boardState[i] === player
        })
    })
    
}



startGame()


