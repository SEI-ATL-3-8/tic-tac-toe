console.log('script is linked')

// setTimeout(myAlert, 32000)

const allGrids = document.querySelectorAll('.grid-square')

let turnNbr = 0;
let maxTurns = 9;
// let xPlays = [];
// let oPlays = [];

document.getElementById("reset").addEventListener("click", (event) => {
    for (let i = 0; i < allGrids.length; i++){
        document.getElementById('oimg' + i).classList.add('hidden')
        document.getElementById('ximg' + i).classList.add('hidden')
    }
    turnNbr = 0;
    setTurn()
})

const evaluateBoard = () =>
{
    for (let j = 0; j < allGrids.length; j++){

        turnNbr = 0

        if (!document.getElementById('oimg' + j).classList.contains('hidden') ||
            !document.getElementById('ximg' + j).classList.contains('hidden'))
        {turnNbr++}

        // if(!document.getElementById('oimg' + j).classList.contains('hidden')){
        //     oPlays[j] = true
        // }

        // if(!document.getElementById('ximg' + j).classList.contains('hidden')){
        //     xPlays[j] = true
        // }

    }
    console.log('Turn number is' + turnNbr)
    return turnNbr

        
    // go thru allgrids and count number of turns
    // if beginning of game, say something about that
    // check for win
    // if end of game, say soemthing about that
}


const setTurn = () => {

    let turn = turnNbr % 2 === 0 ? "X" : "O"
    console.log('boyfriend ' + turn + '\'s turn')
    document.getElementById("turntxt").innerHTML = "It is " + turn + "'s turn."
    
}

turnNbr = evaluateBoard()
setTurn() // Setting turn at beginning of game

for (let i = 0; i < allGrids.length; i++) {
    allGrids[i].addEventListener('click', (event) => {
        
        
        console.log(turnNbr)
        
        if (turnNbr >= maxTurns){return}

        if (!document.getElementById('ximg' + i).classList.contains('hidden') || 
            !document.getElementById('oimg' + i).classList.contains('hidden')){
            console.log('boyfriend' + i + ' is off the table')
            return
        }
        
        if (turnNbr % 2 === 0){
            console.log('got em x ' + turnNbr)
            document.getElementById('ximg' + i).classList.remove('hidden')
        }
        else if (turnNbr % 2 === 1){
            console.log('got em o ' + turnNbr)
            document.getElementById('oimg' + i).classList.remove('hidden')
        }

        
        
        // if (check for win)
        // {
        //     // if the same player has any win type, they win
        //     // win types
        //     // horizontal top
        //     // horizontal middle
        //     // horizontal bottom
        //     // vertical left
        //     // vertical middle
        //     // vertical right
        //     // forward slash
        //     // back slash
        //     // else draw
        // }
        
        //evaluateBoard()
        turnNbr++
        setTurn() // setting turn after move
    }
);}





