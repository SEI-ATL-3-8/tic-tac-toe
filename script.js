const tttBox = document.querySelectorAll(".ttt_square")
const playerOneScore = document.querySelector(".p1score")
const playerTwoScore = document.querySelector(".p2score")
const winnerText = document.querySelector(".winner_text")
const playerOneArrow = document.querySelector(".arrowp1")
const playerTwoArrow = document.querySelector(".arrowp2")
const playerOnePiece = "X"
const playerTwoPiece = "O"
let playerOneTurn = true;
let playerTwoTurn = false;

document.querySelector(".reset_button").addEventListener('click', () => {
    playerOneTurn = true
    clearBoard()
})

document.querySelector(".reset_score").addEventListener('click', () => {
    playerOneScore.textContent = 0
    playerTwoScore.textContent = 0
})

Array.prototype.forEach.call(tttBox, box => { 
    box.addEventListener('click', () => {
        if(playerOneTurn && box.textContent === "") {
            box.textContent = playerOnePiece
        } else if(playerTwoTurn && box.textContent === "") {
            box.textContent = playerTwoPiece
        } else {
            alert("The box is already played pick another one.")
        }
        checkWinner()
        checkForCat()
        changePlayerTurn()
    })
})

const changePlayerTurn = () => {
    if(playerOneTurn) {
        playerOneTurn = false
        playerTwoTurn = true
        playerTwoArrow.classList.remove("hidden")
        playerOneArrow.classList.add("hidden")
    } else if(playerTwoTurn) {
        playerTwoTurn = false
        playerOneTurn = true
        playerTwoArrow.classList.add("hidden")
        playerOneArrow.classList.remove("hidden")
    }
}

const clearBoard = () => Array.prototype.forEach.call(tttBox, box => { 
        box.textContent = ""
        playerOneTurn = true
        playerTwoTurn = false
})

const checkWinner = () => {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    let boxToCheck;
    for(let line in winConditions) {
        let xCount = 0;
        let oCount = 0;
        for(let i in winConditions[line])
            try {
                if (!(tttBox[winConditions[line][i]].innerHTML === undefined)) {
                    boxToCheck = tttBox[winConditions[line][i]].innerHTML
                    if(boxToCheck === playerTwoPiece) {
                        oCount++
                        xCount = 0
                    } else if(boxToCheck === playerOnePiece) {
                        xCount++
                        oCount = 0
                    }
                }
            } catch(TypeError) {
                console.log("caught error : LN 78")
                break;
            }
        if(xCount >= 3) {    
            let newScore = parseInt(playerOneScore.textContent) + 1
            playerOneScore.textContent = newScore
            setTimeout(function() {
                slowDownAlert("Player One Wins")
            }, 100)
        }
        if(oCount >= 3) {
            let newScore = parseInt(playerTwoScore.textContent) + 1
            playerTwoScore.textContent = newScore
            setTimeout(function() {
                slowDownAlert("Player Two Wins")
            }, 100)
        }
    }
}

const checkForCat = () => {
    let boxesFilled = 0;
    let arr = []
    Array.prototype.forEach.call(tttBox, box => {
        arr.push(box.textContent)
    })
    for(let i of arr) {
        if(!(i === "")) {
            boxesFilled++
        }
    }
    if(boxesFilled === 9) {
        setTimeout(function() {
            slowDownAlert("Draw Game!")
        }, 100)
    }
}

// if not used alert will happen faster than the last X or O will
// be drawn on screen
const slowDownAlert = message => {
    alert(message)
    clearBoard()
}