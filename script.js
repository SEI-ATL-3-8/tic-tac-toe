console.log('js file linked!');
const resetBut = document.getElementById('resetBut');
const squares = Array.from(document.getElementsByClassName('square'));
const playerText = document.getElementById('playerText');
const spaces= [null, null, null, null, null, null, null, null, null];

console.log(squares);

const oTurn = "O";
const xTurn = "X";

let currentTurn;


const clickCon = (e) => {
    const id = e.target.id;
    console.log(id);

    if(!spaces[id]) {
        spaces[id] = currentTurn;
        e.target.innerText = currentTurn;
    
        currentTurn = currentTurn === oTurn ? xTurn : oTurn;
    }
}

squares.forEach((square, index) => {
    square.addEventListener('click', clickCon);
    })

    const theWinner = () => {
        if(boxes[0] === currentTurn) {
            if(boxes[1] === currentTurn && boxes[2] === currentTurn) {
                console.log(currentTurn + " wins!");
                return true;
            }
            if(boxes[3] === currentTurn && boxes[6] === currentTurn) {
                console.log(currentTurn + " wins!");
                return true;
            }
            if(boxes[4] === currentTurn && boxes[8] === currentTurn) {
                console.log(currentTurn + " wins!");
                return true;
            }
        }
    }

    // resetBut.addEventListener('click', restart);

    // const restart = () => {

    //     boxes.forEach(box => {
    //         box.innerText = '';
    //     })
    //     playerText.innerText = 'Start!';
    //     currentTurn = oTurn;
    // }













