let player = 1;
const display = () => {
    let endgame = false;

    let currentClick = document.querySelectorAll('.grid-item')
    for (let i = 0; i< currentClick.length && !endgame; i ++){
         currentClick[i].addEventListener( 'click', (event) =>{
        if (endgame) return;

        if(currentClick[i].innerText === "X" || currentClick[i].innerText === "O"){
          return;
            }

        if(player === 1){
         
         currentClick[i].innerText = ("X");
         document.getElementById('print').innerText = " Player O turn ";
         player = 0;
        }
        else{
         currentClick[i].innerText = ("O")
         document.getElementById('print').innerText = " Player X turn ";
         player = 1;
        }

        const box1 = document.getElementById('box1') && document.getElementById('box1').innerText;
        const box2 = document.getElementById('box2') && document.getElementById('box2').innerText;
        const box3 = document.getElementById('box3') && document.getElementById('box3').innerText;
        const box4 = document.getElementById('box4') && document.getElementById('box4').innerText;
        const box5 = document.getElementById('box5') && document.getElementById('box5').innerText;
        const box6 = document.getElementById('box6') && document.getElementById('box6').innerText;
        const box7 = document.getElementById('box7') && document.getElementById('box7').innerText;
        const box8 = document.getElementById('box8') && document.getElementById('box8').innerText;
        const box9 = document.getElementById('box9') && document.getElementById('box9').innerText;
   
        if (box1 == "X" && box2 == "X" && box3 == "X"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }

        else if (box1 == "X" && box4 == "X" && box7 == "X"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box7 == "X" && box8 == "X" && box9 == "X"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box3 == "X" && box6 == "X" && box9 == "X"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box1 == "X" && box5 == "X" && box9 == "X"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box3 == "X" && box5 == "X" && box7 == "X"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box2 == "X" && box5 == "X" && box8 == "X"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box4 == "X" && box5 == "X" && box6 == "X"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }


        if (box1 == "O" && box2 == "O" && box3 == "O"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }

        else if (box1 == "O" && box4 == "O" && box7 == "O"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box7 == "0" && box8 == "O" && box9 == "O"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box3 == "O" && box6 == "O" && box9 == "O"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box1 == "O" && box5 == "O" && box9 == "O"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box3 == "O" && box5 == "O" && box7 == "O"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box2 == "O" && box5 == "O" && box8 == "O"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }
        else if (box4 == "O" && box5 == "O" && box6 == "O"){
            document.getElementById('print2').innerText = "Congratulations You Win";
            endgame = true;
        }

        else if( (box1 == "X" || box1 == "O") && (box2 == "X" || box2 == "O") && (box3 == "X" || box3 == "O") && (box4 == "X" || box4 == "O") && (box5 == "X" || box5 == "O") && (box6 == "X" || box6 == "O") && (box7 == "X" || box7 == "O" )&& (box8 == "X" || box8 == "O") && (box9 == "X" || box9 == "O") )
        {
            document.getElementById('print2').innerText = "Sorry the game was a Tie";
            endgame = true;
        }
        })

    }

}   

