console.log("this is test")

const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');


let board;
let turn = 'X';
let win;
let winner = null;

document.getElementById('reset-button').addEventListener('click', boardArray);

function boardArray() {
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
        
    ];
    showResults();
};


function getWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];



    winningCombos.forEach((combo) => {
        if(winningCombos[combo[0]]
            && winningCombos[combo[0] === winningCombos[1]]
            && winningCombos[combo[0]] === winningCombos[2]) {
                winner = 'current'
            }
    return winner || (boardArray.includes('') ? null : 'Tie');
    )};
  

function handleTurn(event) {
    let idx = squares.findIndex(function(square){
        return square === event.target;
        
    });
    board[idx] = turn;
    if (turn === 'X') {
        turn = 'O'
    }   else {
        turn = 'X'
    }
    showResults();
    win = getWinner();
};

document.getElementById('board').addEventListener('click', handleTurn);

function showResults() {
    board.forEach(function (mark, index){
        squares[index].textContent = mark;
    });

    if (win === 'T') {
        messages.textContent = `That's a tie!`
    } else if (win) {
        messages.textContent = `${win} wins the game!`
    } else {
        messages.textContent = `It's ${turn}'s turn!`
    }   
};

boardArray();
