const squareDivs = document.querySelectorAll('.squares');


//Variables
let xIsNext = true;
let playerTurn;
let i;
//let gameEnd = setInterval(gameTimer, 100000)

//let squareOne = squareOne[0].classList.length;
//let squareTwo = squareOne[1].classList.length;
//let squareThree = squareOne[2].classList.length;
//let squareFour = squareOne[3].classList.length;
//let squareFive = squareOne[4].classList.length;
//let squareSix = squareOne[5].classList.length;
//let squareSeven = squareOne[6].classList.length;
//let squareEight = squareOne[7].classList.length;
//let squareNine = squareOne[8].classList.length;
//console.log(squareOne[0].classList.length);
//console.log(classList);
const boxes = document.getElementsByClassName('squares');
console.log(boxes[0].classList[1]);
console.log(boxes);
//Clicks
const showSquareClicks = (event) => {
    const classList = event.target.classList;
    const location = classList[1];
    console.log(location)




    if(classList[2] === 'x' || classList[2] === 'o'){
        classList.add('x');
        return;
    }
   // if(squareOne[0].classList.length === 3 && squareOne[1].classList.length === 3 && squareOne[2].classList.length === 3){
   //             console.log("WE HAVE A WINNER, GAME OVER!!!")
   // }
    if( boxes[0].classList[2] == 'x'){
        console.log('it works!')
    }

    if (xIsNext){
        classList.add('x');
        playerTurn = alert("It's player O's turn!");
        xIsNext = !xIsNext;
        console.log(boxes[0].classList[2]);
        console.log(boxes);
    }
    else{
        classList.add('o');
        playerTurn = alert("It's player X's turn!");
        xIsNext = !xIsNext;
        console.log(boxes[0].classList[2]);
        console.log(boxes);
    }

    
    

}




// Ask how to use a math equivalent of this code.
for( const squareDiv of squareDivs ){
    squareDiv.addEventListener('click', showSquareClicks)
    
}