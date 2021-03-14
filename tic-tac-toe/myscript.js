const resetButton = document.querySelector('.reset')

const gameCells = document.querySelectorAll('.cell')

const clickReset = ()=> {
    
};
const cellCliked =(event) =>{
    const classList = event.target.classList;

    if(classList[1] === 'x' || classList[1] === 'o') {
        return;
    }
   
    if (xIsnext === true) {
        event.target.classList.add('o')
        xIsnext = !xIsnext
    } else {
        event.target.classList.add('x')
        xIsnext = !xIsnext
    }
}   
const gameWiner = () =>{
    const topLeft = gameCells[0].classList;
    const topMiddle = gameCells[1].classList;
    const topRight = gameCells[2].classList;
    const  middleLeft= gameCells[3].classList;
    const middleMiddle = gameCells[4].classList;
    const middleRight = gameCells[5].classList;
    const bottomLeft = gameCells[6].classList;
    const bottomMiddle = gameCells[7].classList;
    const bottomRight = gameCells[8].classList;

    

   
}
let gamestill = true;
let xIsnext = true;

resetButton.addEventListener('click', clickReset )

for (const gameCell of gameCells) {
gameCell.addEventListener('click', cellCliked)
}

