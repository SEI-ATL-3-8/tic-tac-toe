//console.log('test12321tset');
//const gameSquares = document.querySelectorAll('.square');
const gameSquares = Array.from(document.getElementsByClassName('square'));
const gameOptions = [null, null, null, null, null, null, null, null, null];
const playerTurn = document.querySelector('.turn-box');
const playAgainBtn = document.querySelector('.reset');
const letterX = 'X';
const letterO = 'O';
let playerOne = letterX;
let turn
const gameWinner = document.getElementById('winner');
const resetBtn = document.querySelector('.reset');
const whatTurn = document.querySelector('.shapes');


console.log(whatTurn)
//console.log(gameWinner)
//console.log(letterX)
//console.log(letterO)
//console.log(gameSquares)
//console.log(gameOptions)
//console.log(playerTurn)
//console.log(playAgainBtn)
//Each square now has an listener on it which fires of a function
gameSquares.forEach((square, index) => {
    square.addEventListener('click', squareClicked);
});



function squareClicked(e) {
    //console.log('test12321tset');
    const squareId = e.target.id;
    //console.log(squareId);
    //if the game hasn't started, the first click on a square will be an X
    //Once X goes it'll be O's turn and back again
    //Also there is a function that will hopefully print game winner
    if(!gameOptions[squareId]) {
        gameOptions[squareId] = playerOne;
        e.target.innerText = playerOne;
        if(gameHasWinner(playerOne)) {
            gameWinner.innerHTML = `${playerOne} has won`;
            return;
        }
        playerOne = playerOne === letterX ? letterO : letterX;
    }
};


//turn = playerOne === letterO ? letterX : letterO;
//document.querySelector('.shapes').innerText = 'player ' +  turn;


//Here comes a whole lotta conditionals
const gameHasWinner = (playerOne) => {
    if(gameOptions[0] === playerOne) {
        if(gameOptions[1] === playerOne && gameOptions[2] === playerOne) {
            console.log(`${playerOne} has one`);
            gameWinner.innerText = `${playerOne} wins`;
        } 
        if (gameOptions[3] === playerOne && gameOptions[6] === playerOne) {
            console.log(`${playerOne} has won`);
            gameWinner.innerText = `${playerOne} wins`;
        }
        if (gameOptions[4] === playerOne && gameOptions[8] === playerOne) {
            console.log(`${playerOne} has one`);
            gameWinner.innerText = `${playerOne} wins`;
        }
    }
    if (gameOptions[8] === playerOne) {
        if(gameOptions[2] === playerOne && gameOptions[5] === playerOne) {
            console.log(`${playerOne} has won`);
            gameWinner.innerText = `${playerOne} has won`;
        }
        if (gameOptions[7] === playerOne && gameOptions[6] === playerOne) {
            console.log(`${playerOne} has one`);
            gameWinner.innerText = `${playerOne} has won`;
        }
    }
    if (gameOptions[4] === playerOne) {
        if (gameOptions[3] === playerOne && gameOptions[5] === playerOne) {
            console.log(`${playerOne} has won`);
            gameWinner.innerText = `${playerOne} has won`;
        }
        if (gameOptions[1] === playerOne && gameOptions[7] === playerOne) {
            console.log(`${playerOne} has won`);
            gameWinner.innerText = `${playerOne} has won`;
        }
    }
    if (gameOptions[6] === playerOne) {
        if (gameOptions[4] === playerOne && gameOptions[2] === playerOne) {
            console.log(`${playerOne} has one`);
            gameWinner.innerText = `${playerOne} has won`;
        }
    }
};



//resetBtn.addEventListener('click', () => {
    //document.getElementById(0).innerText = '';
    //document.getElementById(1).innerText = '';
    //document.getElementById(2).innerText = '';
    //document.getElementById(3).innerText = '';
    //document.getElementById(4).innerText = '';
    //document.getElementById(5).innerText = '';
    //document.getElementById(6).innerText = '';
    //document.getElementById(7).innerText = '';
    //document.getElementById(8).innerText = '';
//})


resetBtn.addEventListener('click', () => {
    gameSquares.forEach((square, index) => {
        square.innerText = '';
    })
})
