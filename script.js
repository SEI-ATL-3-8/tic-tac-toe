/***************** VARIABLES *****************/

//turn tracking variable
let currentTurn;
//grab grid
const grid = document.querySelectorAll('.square');
//grab reset button
const reset = document.querySelector('button');
//player score variables
let xScore = 0;
let oScore = 0;
//grab wins elements and turn elements
const xWins = document.querySelector('#xWins');
const oWins = document.querySelector('#oWins');
const xTurn = document.querySelector('#xTurn');
const oTurn = document.querySelector('#oTurn');
//grab result element
const result = document.querySelector('.result');
//game over bool
let gameOver = false;
//grid fill bool
let gridFilled = false;

/***************** FUNCTIONS *****************/

//start game - initialize turn to x and display wins
const Initialize = () =>
{
    currentTurn = 'x';
    xWins.textContent = 0;
    oWins.textContent = 0;
    xTurn.classList.add('active');
}

//swap player turn
const PassTurn = () =>
{
    if (currentTurn === 'x')
    {
        currentTurn = 'o';
        xTurn.classList.remove('active');
        oTurn.classList.add('active');
    }
    else
    {
        currentTurn = 'x';
        oTurn.classList.remove('active');
        xTurn.classList.add('active');
    }
}

//reset game
const Reset = () =>
{
    //clear board
    for (let square of grid)
    {
        square.classList.remove('marked');
        square.classList.remove('x');
        square.classList.remove('o');
        square.textContent = '';
    }

    //give turn to x
    currentTurn = 'x';
    oTurn.classList.remove('active');
    xTurn.classList.add('active');
    //clear result
    result.textContent = '';
    //game reset
    gameOver = false;
    gridFilled = false;
}

const Result = () =>
{
    if (currentTurn === 'x')
        {
            xScore++;
            xWins.textContent = xScore;
            result.textContent = 'Player X wins!';
            gameOver = true;
        }
        else
        {
            oScore++;
            oWins.textContent = oScore;
            result.textContent = 'Player O wins!';
            gameOver = true;
        }
}

//check board for wins/draws and update ui accordingly
const CheckGrid = () =>
{
    //first column
    if ((grid[0].classList.contains('x') && grid[3].classList.contains('x') && grid[6].classList.contains('x')) || (grid[0].classList.contains('o') && grid[3].classList.contains('o') && grid[6].classList.contains('o')))
    {
        Result();
    }
    //second column
    else if ((grid[1].classList.contains('x') && grid[4].classList.contains('x') && grid[7].classList.contains('x')) || (grid[1].classList.contains('o') && grid[4].classList.contains('o') && grid[7].classList.contains('o')))
    {
        Result();
    }
    //third column
    else if ((grid[2].classList.contains('x') && grid[5].classList.contains('x') && grid[8].classList.contains('x')) || (grid[2].classList.contains('o') && grid[5].classList.contains('o') && grid[8].classList.contains('o')))
    {
        Result();
    }
    //first row
    else if ((grid[0].classList.contains('x') && grid[1].classList.contains('x') && grid[2].classList.contains('x')) || (grid[0].classList.contains('o') && grid[1].classList.contains('o') && grid[2].classList.contains('o')))
    {
        Result();
    }
    //second row
    else if ((grid[3].classList.contains('x') && grid[4].classList.contains('x') && grid[5].classList.contains('x')) || (grid[3].classList.contains('o') && grid[4].classList.contains('o') && grid[5].classList.contains('o')))
    {
        Result();
    }
    //third row
    else if ((grid[6].classList.contains('x') && grid[7].classList.contains('x') && grid[8].classList.contains('x')) || (grid[6].classList.contains('o') && grid[7].classList.contains('o') && grid[8].classList.contains('o')))
    {
        Result();
    }
    //first diagonal
    else if ((grid[0].classList.contains('x') && grid[4].classList.contains('x') && grid[8].classList.contains('x')) || (grid[0].classList.contains('o') && grid[4].classList.contains('o') && grid[8].classList.contains('o')))
    {
        Result();
    }
    //second diagonal
    else if ((grid[2].classList.contains('x') && grid[4].classList.contains('x') && grid[6].classList.contains('x')) || (grid[2].classList.contains('o') && grid[4].classList.contains('o') && grid[6].classList.contains('o')))
    {
        Result();
    }
    //draw
    else
    {
        //loop through grid and check if its filled
        for (let i = 0; i < grid.length; i++)
        {
            //break out of loop if a square is not marked
            if (!grid[i].classList.contains('marked'))
            {
                break;
            }
            //grid filled
            if (i === 8)
            {
                gridFilled = true;
            }
        }

        //grid is filled and there is no win
        if (gridFilled)
        {
            result.textContent = 'It\'s a draw!';
            gameOver = true;
        }
    }
}


/***************** MAIN *****************/

//start game
Initialize();

//reset button
reset.addEventListener('click', Reset);

//add event listeners to all squares in grid
for (let square of grid)
{
    square.addEventListener('click', () =>
    {
        //check if game is over
        if (!gameOver)
        {
            //check if box is already marked
            if (!square.classList.contains('marked'))
            {
                //add marked class when square is clicked
                square.classList.add('marked');

                //mark with x or o based on current turn, check board for draw/win and pass turn
                if (currentTurn == 'x')
                {
                    square.classList.add('x');
                    square.textContent = 'X';
                    CheckGrid();
                    PassTurn();
                }
                else
                {
                    square.classList.add('o');
                    square.textContent = 'O';
                    CheckGrid();
                    PassTurn();
                }
            }
        }
    })
}