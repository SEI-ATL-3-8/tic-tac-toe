console.log('hello from app.js')

// select DOM elements
const squares = document.querySelectorAll('.square')
const startBtn = document.querySelector('.startBtn')
const resetBtn = document.querySelector('.resetBtn')
const p12 = document.querySelectorAll('.player')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const pScores = document.querySelectorAll('.pScore')
const gamesPlayed = document.querySelector('#gamesPlayed')


const players = [
    {
        player: 1,
        myTurn: false,
        char: 'X',
        wins: 0
    },
    {
        player: 2,
        myTurn: false,
        char: 'O',
        wins: 0
    }
]

const game = {
    squaresRemaining: 9,
    play: false,
    games: 0,
    gamePlay: () => {
        resetGame()
        game.squaresRemaining = 9
        game.play = true
        firstTurn()
        makeSelection()
    },
    checks: () => {
        if(checkCat()) {
            if(check3InRow()){
                if(check3InCol()){
                    if(check3Diag()){
                        nextTurn()
        }}}}
    },
    gameOver: (p, msg) => {
        game.play = false
        // add point to player
        console.log(p, msg)
        if(p !== players[2]){
            p.wins++
        }
        console.log(players)
        for(let i = 0; i < 2; i++){
            console.log(pScores[i].innerHTML = players[i].wins)
        }
        // add game played
        game.games++
        gamesPlayed.innerHTML = game.games
        alert(msg)
        // resetGame()
    }
}

startBtn.addEventListener('click', game.gamePlay)

// functions
const firstTurn = () => {
    const randomInt = Math.floor(Math.random() * 2)
    highlightTurn(randomInt)
    if (randomInt === 0) {
        players[0].myTurn = true;
        players[1].myTurn = false;
    } else {
        players[0].myTurn = false;
        players[1].myTurn = true;
    }
    console.log(game.play)
    // console.log(randomInt, players[0].myTurn, players[1].myTurn)
}

const makeSelection = () => {
    for(let square of squares) {
        square.addEventListener('click', (e) => {
            if(players[0].myTurn && e.target.innerHTML === '' && game.play) {
                e.target.innerHTML = players[0].char
                e.target.classList.add('filled')
                game.squaresRemaining--
                game.checks()
            } else if (players[1].myTurn && e.target.innerHTML === '' && game.play) {
                e.target.innerHTML = players[1].char
                e.target.classList.add('filled')
                game.squaresRemaining--
                game.checks()
            } else {
                console.log('Not your turn!')
            }
        })
    }
}

const nextTurn = () => {
    if(players[0].myTurn) {
        players[0].myTurn = false
        players[1].myTurn = true
        highlightTurn(1)
    } else {
        players[0].myTurn = true
        players[1].myTurn = false
        highlightTurn(0)
    }
}

const highlightTurn = (int) => {
    for(let p of p12) {
        p.classList.remove('highlight')
        if(int === 0) {
            p1.classList.add('highlight')
        } else {
            p2.classList.add('highlight')
        }
    }
}

const check3InRow = () => {
    for(let i = 0; i <= 1; i++){
        const pChar = players[i].char
        const p = players[i]
        const msg = `Game Over! Player ${p.player} wins!`

        // if (squares 123 | 456 | 789 === p1.char){G.O., player wins}
        if (squares[0].innerHTML === pChar && squares[1].innerHTML === pChar && squares[2].innerHTML === pChar) {
            return game.gameOver(p, msg)
        } else if (squares[3].innerHTML === pChar && squares[4].innerHTML === pChar && squares[5].innerHTML === pChar) {
            return game.gameOver(p, msg)
        } else if (squares[6].innerHTML === pChar && squares[7].innerHTML === pChar && squares[8].innerHTML === pChar) {
            return game.gameOver(p, msg)
        }
    }
    return true
}

const check3InCol = () => {
    for(let i = 0; i <= 1; i++){
        const pChar = players[i].char
        const p = players[i]
        const msg = `Game Over! Player ${p.player} wins!`

        // if (squares 147 | 258 | 369 === p1.char)
        if (squares[0].innerHTML === pChar && squares[3].innerHTML === pChar && squares[6].innerHTML === pChar) {
            return game.gameOver(p, msg)
        } else if (squares[1].innerHTML === pChar && squares[4].innerHTML === pChar && squares[7].innerHTML === pChar) {
            return game.gameOver(p, msg)
        } else if (squares[2].innerHTML === pChar && squares[5].innerHTML === pChar && squares[8].innerHTML === pChar) {
            return game.gameOver(p, msg)
        } 
    }
    return true
}

const check3Diag = () => {
    for(let i = 0; i <= 1; i++){
        const pChar = players[i].char
        const p = players[i]
        const msg = `Game Over! Player ${p.player} wins!`

        // if squares 048 | 246
        if (squares[0].innerHTML === pChar && squares[4].innerHTML === pChar && squares[8].innerHTML === pChar) {
            return game.gameOver(p, msg)
        } else if (squares[2].innerHTML === pChar && squares[4].innerHTML === pChar && squares[6].innerHTML === pChar) {
            return game.gameOver(p, msg)
        }
    }
    return true
}

const checkCat = () => {
    const p = players[2]
    const msg = "Game Over! It's a tie!"
    // for(let square of squares){
        if(game.squaresRemaining === 0) {
            return game.gameOver(p, msg)
        } else {
            return true
        }
    // }
    console.log('squaresRemaining', game.squaresRemaining)
}

const resetGame = () => {
    // clear board
    for(let square of squares) {
        square.innerHTML = '';
    }
    // clear highlight
    for(let p of p12) {
        p.classList.remove('highlight')
    }
    // clear players.myTurn
    for(let p in players) {
        p.myTurn = false
    }
    game.play = false
    game.squaresRemaining = 9
}

resetBtn.addEventListener('click', resetGame)