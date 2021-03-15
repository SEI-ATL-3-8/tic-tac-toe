console.log("We're linked, Captain!");

const win1 = [1, 2, 3]
const win2 = [1, 4, 7]
const win3 = [1, 5, 9]
const win4 = [2, 5, 8]
const win5 = [3, 5, 7]
const win6 = [3, 6, 9]
const win7 = [4, 5, 6]
const win8 = [7, 8, 9]

let availableMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let MoveArrX = []
let MoveArrO = []

let ScoreX = 0
let ScoreO = 0
let ScoreAI = 0

let DisplayX = document.querySelector('#P1-Score')
let DisplayO = document.querySelector('#P2-Score')
let DisplayAI = document.querySelector('#AI-Score')

let turnCounter = 1

let misClick = 0

// PvP = 1, PvE = 2
/* let GameState = 1 */

// Testing which turn, odd or even
/* document.querySelector('.gameBox').addEventListener('click', () => {
    
    console.log(turnCounter)

    
}) */



// Reset Game Mechanic
document.querySelector('.btn-reset-mode').addEventListener('click', () => {
    for ( let i = 1; i <= 9; i++) {
        const cleanXId = i + "-X"
        const cleanOId = i + "-O"

        if (document.getElementById(cleanXId).classList.contains('hidden') == false) {
            document.getElementById(cleanXId).classList.add('hidden')
        }
        if (document.getElementById(cleanOId).classList.contains('hidden') == false) {
            document.getElementById(cleanOId).classList.add('hidden')
        }
        if (document.getElementById(cleanXId).classList.contains('played') == true) {
            document.getElementById(cleanXId).classList.remove('played')
        }
        if (document.getElementById(cleanOId).classList.contains('played') == true) {
            document.getElementById(cleanOId).classList.remove('played')
        }
        
    }
    MoveArrX = []
    MoveArrO = []
    turnCounter = 1
    document.getElementById("P1-Win").classList.add('hidden')
    document.getElementById("P2-Win").classList.add('hidden')
    document.getElementById("P1-Tie").classList.add('hidden')
    document.getElementById("P2-Tie").classList.add('hidden')
    document.getElementById("GameOver").classList.add('hidden')
    document.querySelector('#turnOrdertext').innerHTML = "Next Turn is Player One or X"
    
    
})

// Reset Win Tracker Mechanic
document.querySelector('.btn-reset-wins').addEventListener('click', () => {
    let ScoreX = 0
    let ScoreO = 0
    // let ScoreAI = 0
    document.querySelector('#P1-Score').innerHTML = ScoreX
    document.querySelector('#P2-Score').innerHTML = ScoreO
    // document.querySelector('#AI-Score').innerHTML = ScoreAI
})


// Player vs. Player Game Mechanic
    for ( let i = 1; i <= availableMoves.length; i++) {
        const gridBoxId = i
        const spawnXId = i + "-X"
        const spawnOId = i + "-O"
        
        document.getElementById(gridBoxId).addEventListener('click', () => {
            
            const checkXId = document.getElementById(spawnXId).classList.contains('played')
            const checkOId = document.getElementById(spawnOId).classList.contains('played')
            
            if (checkXId == false && checkOId == false) {
                if (turnCounter % 2 != 0 ) {
                    document.getElementById(spawnXId).classList.remove('hidden')
                    document.getElementById(spawnXId).classList.add('played')
                    document.getElementById(spawnOId).classList.add('played')
                    turnCounter += 1
                    MoveArrX.push(gridBoxId)
                    document.querySelector('#turnOrdertext').innerHTML = "Next Turn is Player Two or O"

                    }
                    else {
                    document.getElementById(spawnOId).classList.remove('hidden')
                    document.getElementById(spawnOId).classList.add('played')
                    document.getElementById(spawnXId).classList.add('played')
                    turnCounter += 1
                    MoveArrO.push(gridBoxId)
                    document.querySelector('#turnOrdertext').innerHTML = "Next Turn is Player One or X"

                    }
            }
            else {
                misClick += 1
                console.log(MoveArrX)
                console.log(MoveArrO)
            }

            //check wins or ties. Maybe eventually I can turn the below into a loop, but for now this will do.
            const Xresult1 = win1.every(i => MoveArrX.includes(i));
            const Xresult2 = win2.every(i => MoveArrX.includes(i));
            const Xresult3 = win3.every(i => MoveArrX.includes(i));
            const Xresult4 = win4.every(i => MoveArrX.includes(i));
            const Xresult5 = win5.every(i => MoveArrX.includes(i));
            const Xresult6 = win6.every(i => MoveArrX.includes(i));
            const Xresult7 = win7.every(i => MoveArrX.includes(i));
            const Xresult8 = win8.every(i => MoveArrX.includes(i));

            const Oresult1 = win1.every(i => MoveArrO.includes(i));
            const Oresult2 = win2.every(i => MoveArrO.includes(i));
            const Oresult3 = win3.every(i => MoveArrO.includes(i));
            const Oresult4 = win4.every(i => MoveArrO.includes(i));
            const Oresult5 = win5.every(i => MoveArrO.includes(i));
            const Oresult6 = win6.every(i => MoveArrO.includes(i));
            const Oresult7 = win7.every(i => MoveArrO.includes(i));
            const Oresult8 = win8.every(i => MoveArrO.includes(i));

            if ( Xresult1 || Xresult2 || Xresult3 || Xresult4 || Xresult5 || Xresult6 || Xresult7 || Xresult8 ) {
                document.getElementById("P1-Win").classList.remove('hidden')
                document.getElementById("GameOver").classList.remove('hidden')
                ScoreX += 1
                document.querySelector('#P1-Score').innerHTML = ScoreX
                document.querySelector('#turnOrdertext').innerHTML = "Congrats Player One!"

            } else if ( Oresult1 || Oresult2 || Oresult3 || Oresult4 || Oresult5 || Oresult6 || Oresult7 || Oresult8 ) {
                document.getElementById("P2-Win").classList.remove('hidden')
                document.getElementById("GameOver").classList.remove('hidden')
                ScoreO += 1
                document.querySelector('#P2-Score').innerHTML = ScoreO
                document.querySelector('#turnOrdertext').innerHTML = "Congrats Player Two!"

            } else if ( MoveArrX.length === 5 && MoveArrO.length === 4) {
                document.getElementById("P1-Tie").classList.remove('hidden')
                document.getElementById("P2-Tie").classList.remove('hidden')
                document.getElementById("GameOver").classList.remove('hidden')
                document.querySelector('#turnOrdertext').innerHTML = "Better Luck Next Time!"

            }

        
            

        })
    }






// Started with a hard coded, "brute force" method before getting the "for loop" method to work
/* document.getElementById("1").addEventListener('click', () => {
        if ( turnCounter%2 === 0 ) {
            document.getElementById("1-X").classList.remove('hidden')
        } else {
            document.getElementById("1-O").classList.remove('hidden')
        }
})

document.getElementById("2").addEventListener('click', () => {
    if ( turnCounter%2 === 0 ) {
        document.getElementById("2-X").classList.remove('hidden')
    } else {
        document.getElementById("2-O").classList.remove('hidden')
    }
})

document.getElementById("3").addEventListener('click', () => {
    if ( turnCounter%2 === 0 ) {
        document.getElementById("3-X").classList.remove('hidden')
    } else {
        document.getElementById("3-O").classList.remove('hidden')
    }
})

document.getElementById("4").addEventListener('click', () => {
    if ( turnCounter%2 === 0 ) {
        document.getElementById("4-X").classList.remove('hidden')
    } else {
        document.getElementById("4-O").classList.remove('hidden')
    }
})

document.getElementById("5").addEventListener('click', () => {
    if ( turnCounter%2 === 0 ) {
        document.getElementById("5-X").classList.remove('hidden')
    } else {
        document.getElementById("5-O").classList.remove('hidden')
    }
})

document.getElementById("6").addEventListener('click', () => {
    if ( turnCounter%2 === 0 ) {
        document.getElementById("6-X").classList.remove('hidden')
    } else {
        document.getElementById("6-O").classList.remove('hidden')
    }
})

document.getElementById("7").addEventListener('click', () => {
    if ( turnCounter%2 === 0 ) {
        document.getElementById("7-X").classList.remove('hidden')
    } else {
        document.getElementById("7-O").classList.remove('hidden')
    }
})

document.getElementById("8").addEventListener('click', () => {
    if ( turnCounter%2 === 0 ) {
        document.getElementById("8-X").classList.remove('hidden')
    } else {
        document.getElementById("8-O").classList.remove('hidden')
    }
})

document.getElementById("9").addEventListener('click', () => {
    if ( turnCounter%2 === 0 ) {
        document.getElementById("9-X").classList.remove('hidden')
    } else {
        document.getElementById("9-O").classList.remove('hidden')
    }
}) */

