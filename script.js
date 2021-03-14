//html elements
const startOver = document.querySelector('.reset')
const turn1 = document.querySelector('.turn');
const square = document.querySelectorAll('.gameoption');
const multiPlayer = document.querySelector('.reg')
const singlePlayer = document.querySelector('.comp')
const compO = document.querySelectorAll('p');

let playingGame = true;
let turnX = true;
let randNum = Math.round(Math.random()*9)
//console.log(randNum);
//let winner = null;

// changes the player turn to show winner
const displayWinner = () => {
    playingGame = false;
    turn1.innerHTML = "Player: " + winner + " is the winner!";
}


//checks all possible wins and invokes display winner if any are true
const checkForWinner = () => {
    const box1 = square[0].classList[1];
    const box2 = square[1].classList[1];
    const box3 = square[2].classList[1];
    const box4 = square[3].classList[1];
    const box5 = square[4].classList[1];
    const box6 = square[5].classList[1];
    const box7 = square[6].classList[1];
    const box8 = square[7].classList[1];
    const box9 = square[8].classList[1];

if (box1 && box1 === box2 && box1 === box3 ||
    box1 && box1 === box4 && box1 === box7 ||
    box1 && box1 === box5 && box1 === box9){
   winner = box1;
displayWinner();
} else if (box4 && box4 === box5 && box4 === box6){
    winner = box4;
    displayWinner();
}else if (box7 && box7 === box8 && box7 === box9 || 
    box7 && box7 === box5 && box7 === box3){
    winner = box7;
    displayWinner();
}else if(box2 && box2 === box5 && box2 === box8){
    winner = box2;
    displayWinner();
}else if(box3 && box3 === box6 && box3 === box9){
 winner = box3;
 displayWinner();
} else if(box1  && box2 && box3 && box4 && box5 && box6 && box7 && box8 && box9){
    playingGame = false;
    turn1.innerHTML = "Meeeeow! Cats Game!!"
} 
}

// clears board, starts game over, resets player back to true (player x)
const resetIsh = () => {
    playingGame = true;
    turnX = true;
    turn1.innerHTML = 'Player: X';
    for (let i=0; i<square.length;i++){
    square[i].classList.remove('x');
    square[i].classList.remove('o');
    winner = null;
    }
    
}
    
//starts the game
//decides what to do for each click
function currentClickMulti(e) {
   //if box is already clicked, do nothing. 
    if (e.target.classList[1] === 'x' || e.target.classList[1] === 'o'){
        return;
        //adds X to clicked box.. switches player turn and checks for winner
    } else if (turnX === true) {
        turn1.innerHTML = "Player: O";
        e.target.classList.add('x');
        turnX = !turnX;
        checkForWinner();
        } 
        //adds O to clicked box.. switches player turn and checks for winner
        else {
        turn1.innerHTML = 'Player: X';
        e.target.classList.add('o');
        turnX = !turnX;
        checkForWinner();
    }
}

//adds event listener to each box and invokes currentclick if anything is clicked
const startMultiPlayer = () => { 
for (let i=0; i<square.length;i++){
    square[i].addEventListener('click', (currentClickMulti)
    )}
//adds event listener to start over and invokes resetIsh if its clicked
    startOver.addEventListener('click', (resetIsh));
}

    multiPlayer.addEventListener('click', (startMultiPlayer));
  


    
    

// const startSinglePlayer = () => { 
//     for (let i=0; i<square.length;i++){
//         square[i].addEventListener('click', (currentclickSingle)
//         )}}
// const currentclickSingle = (e) => { 
// if (e.target.classList[1] === 'x' || e.target.classList[1] === 'o'){
//     return;
// } else {
//     turn1.innerHTML = "Player: O";
//     e.target.classList.add('x');
//     checkForWinner();
//     computerChoice();
//     checkForWinner();
//     } 
// }
//     const computerChoice =  () => {

//         square[randNum].classList.add('o')
//     }



//     singlePlayer.addEventListener('click', (startSinglePlayer));

    
    
    
    //console.log(randNum)