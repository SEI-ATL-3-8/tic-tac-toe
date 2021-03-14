const allSpaces = document.querySelectorAll('.spaces')
const allX = document.querySelectorAll('.xImg')
const allO = document.querySelectorAll('.oImg')
const startButton = document.querySelector('.start')

startButton.addEventListener('click', (event) =>{
    startGame()
})


console.log(allX);
//makes varaible with start button
let turn = 0;




function addListen(){
    for (let i = 0; i < allSpaces.length; i++){
        allSpaces[i].addEventListener('click', (event) =>{
            if(allSpaces[i].classList[1] === "empty")
            { 
                if(turn % 2 === 0)
                {
                    allSpaces[i].classList.remove('empty')
                    allX[i].classList.remove('hidden')
                    console.log("x");
                    let win = checkWin()
                    document.getElementById('turn').innerText = "O turn"
                    turn++
                    console.log(turn);
                    if(turn === 9 && win !== true){
                        console.log("Draw")
                    }
                }
                else{
                    allSpaces[i].classList.remove('empty')
                    allO[i].classList.remove('hidden')
                    console.log('o')
                    checkWin()
                    document.getElementById('turn').innerText = "X turn"
                    turn++
                    console.log(turn);
                    if(turn ===9){
                        console.log("Draw")
                    }
                }    
            }
        })
    }


}

function startGame(){
    for (let i = 0; i < allSpaces.length; i++){
        
        allSpaces[i].classList.add('empty')
        allX[i].classList.add('hidden')
        allO[i].classList.add('hidden')
        turn = 0
    }
}



function win(winner){
    for (let i = 0; i < allSpaces.length; i++){
        allSpaces[i].classList.remove('empty')
    }
    document.getElementById('winner').innerText = winner +" Wins"
    console.log("winner chhanged")
}


function checkWin() {
    console.log("check win")
    if(turn % 2 === 0){
        console.log("check x");
        if (allX[0].classList[1] !== "hidden" && allX[1].classList[1] !== "hidden" && allX[2].classList[1] !== "hidden"){
            win("X")
            console.log("x wins")
            return true
        }
        else if(allX[3].classList[1] !== "hidden" && allX[4].classList[1] !== "hidden" && allX[5].classList[1] !== "hidden"){
            win("X")
            console.log('x wins')
            return true
        }
        else if(allX[6].classList[1] !== "hidden" && allX[7].classList[1] !== "hidden" && allX[8].classList[1] !== "hidden"){
            win()
            console.log('x wins')
            return true
        }
        else if(allX[0].classList[1] !== "hidden" && allX[3].classList[1] !== "hidden" && allX[6].classList[1] !== "hidden"){
            win("X")
            console.log('x wins')
            return true
        }
        else if(allX[1].classList[1] !== "hidden" && allX[4].classList[1] !== "hidden" && allX[7].classList[1] !== "hidden"){
            win("X")
            console.log('x wins')
            return true
        }
        else if(allX[2].classList[1] !== "hidden" && allX[5].classList[1] !== "hidden" && allX[8].classList[1] !== "hidden"){
            win("X")
            console.log('x wins')
            return true
        }
        else if(allX[0].classList[1] !== "hidden" && allX[4].classList[1] !== "hidden" && allX[8].classList[1] !== "hidden"){
            win("X")
            console.log('x wins')
            return true
        }
        else if(allX[6].classList[1] !== "hidden" && allX[4].classList[1] !== "hidden" && allX[2].classList[1] !== "hidden"){
            win("X")
            console.log('x wins')
            return true
        }
        
    }
    else{
        console.log("check o");
        if (allO[0].classList[1] !== "hidden" && allO[1].classList[1] !== "hidden" && allO[2].classList[1] !== "hidden"){
            win("O")
            console.log("o wins")
        }
        else if(allO[3].classList[1] !== "hidden" && allO[4].classList[1] !== "hidden" && allO[5].classList[1] !== "hidden"){
            win("O")
            console.log('o wins')
        }
        else if(allO[6].classList[1] !== "hidden" && allO[7].classList[1] !== "hidden" && allO[8].classList[1] !== "hidden"){
            win("O")
            console.log('o wins')
        }
        else if(allO[0].classList[1] !== "hidden" && allO[3].classList[1] !== "hidden" && allO[6].classList[1] !== "hidden"){
            win("O")
            console.log('o wins')
        }
        else if(allO[1].classList[1] !== "hidden" && allO[4].classList[1] !== "hidden" && allO[7].classList[1] !== "hidden"){
            win("O")
            console.log('o wins')
        }
        else if(allO[2].classList[1] !== "hidden" && allO[5].classList[1] !== "hidden" && allO[8].classList[1] !== "hidden"){
            win("O")
            console.log('o wins')
        }
        else if(allO[0].classList[1] !== "hidden" && allO[4].classList[1] !== "hidden" && allO[8].classList[1] !== "hidden"){
            win("O")
            console.log('o wins')
        }
        else if(allO[6].classList[1] !== "hidden" && allO[4].classList[1] !== "hidden" && allO[2].classList[1] !== "hidden"){
            win("O")
            console.log('o wins')
        }
        
    }

}


addListen()