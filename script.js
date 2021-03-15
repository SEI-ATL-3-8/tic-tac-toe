// Global Elements
let scoreGrid = [['','',''] ,['','',''], ['','','']];
let playerOneTurn = true;
let bot = false;

// Dom Elements
const colorMode = document.getElementById('color-mode');
const gameMode = document.getElementById('game-mode');
const gameGrids = document.querySelectorAll('.grid-space');
const message = document.getElementById('message');
const gridTable = document.querySelector('.grid-table');


let currentColor =  'dark';


const insertInScoreGrid = (current,pos,symb) => {
    current.innerText = symb;
    const [one, two] = get2DPosition(pos);
    scoreGrid[one][two] = symb;
}   


const get2DPosition = (pos) => {
    let counter = 0;
    for (let i = 0; i < scoreGrid.length; i++) {
        for (let k = 0; k < scoreGrid[i].length; k++) {
            if (counter === pos && scoreGrid[i][k] === '') return [i,k]; 
            counter++;
        }
    }
}



// Check Grid
const checkWin = (symb) => { 
    
    // Check Columns and Rows
    for (let rows = 0; rows < scoreGrid.length; rows++) {
        const currentColumn = [];
        const currentRow = [];
        for (let cols = 0; cols < scoreGrid[rows].length; cols++) {
            currentColumn.push(scoreGrid[cols][rows]);
            currentRow.push(scoreGrid[rows][cols]);
        }   
        if (currentColumn.every(val => val === symb) ||  currentRow.every(val => val === symb) ) return true;
    }

    // Check Diagonals
   const checkDiag = (scoreGrid[0][0] === symb && scoreGrid[1][1] === symb && scoreGrid[2][2] === symb) || (scoreGrid[0][2] === symb && scoreGrid[1][1] === symb && scoreGrid[2][0] === symb) 

   if (checkDiag) return true
    
    return false;
}


const checkFilled = () => {
    return [...gameGrids].every(grid => grid.innerText !== '');
}

const resetGame = (result) => {
    message.innerText = result;
    
    setTimeout(() => {
        message.innerText = 'Resetting Game...';
        gridTable.style.display = 'none';
    },2000);

    setTimeout(() => {
        gridTable.style.display = 'grid';
        scoreGrid = [['','',''] ,['','',''], ['','','']];
        [...gameGrids].forEach(grid => grid.innerText = '');
        message.innerText = 'Click on any square to start the game';
    },3000);
  
}





// Game Grid Event Listener
gameGrids.forEach((grid,pos) => {
    grid.addEventListener('click', (event) => {
        if( !event.target.innerText) {
            if (playerOneTurn) {
                insertInScoreGrid(event.target,pos,'X');
                
                if (checkWin('X')) {
                  
                    resetGame('Player One Wins!!');
                }

                else if (checkFilled()) {
                    
                    resetGame('Tie!, No one Wins');
                }

                playerOneTurn = !playerOneTurn;
            }
    
            else {
                insertInScoreGrid(event.target,pos,'O');
                if (checkWin('O')) {
                    
                    resetGame('Player Two Wins!!');
                }   

                else if (checkFilled()) {
                    
                    resetGame( 'Tie!, No one Wins');
                }
                playerOneTurn = !playerOneTurn;
              


              
            }

        }
        
    
    });
})

message.innerText = 'Click on any square to start the game';

// On Start of Screen
document.documentElement.setAttribute('data-theme', currentColor);
    // Add Event Listeners to the buttons
    // Color Mode Button
for (let i = 0; i < colorMode.children.length; i++) {
    colorMode.children[i].addEventListener('click', (e) => {
        if (!e.target.disabled) {
            currentColor = currentColor === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme',currentColor);
            for (let i = 0; i < colorMode.children.length; i++) {
                colorMode.children[i].disabled = false;
                colorMode.children[i].classList.remove('active');
            }
            e.target.disabled = true;
            e.target.classList.add('active');
        }
      
    });
}


for (let i = 0; i < gameMode.children.length; i++) {
    gameMode.children[i].addEventListener('click', (e) => {
        bot = !bot;
        if (!e.target.disabled) {
            for (let i = 0; i < gameMode.children.length; i++) {
                gameMode.children[i].disabled = false;
                gameMode.children[i].classList.remove('active');
            }
            e.target.disabled = true;
            e.target.classList.add('active');
        }
      
    });
}

