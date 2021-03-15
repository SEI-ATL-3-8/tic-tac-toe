var game = document.getElementById("game");
 var goo = 0;
 for (let i = 0; i < 9; i++) {
     game.innerHTML;
 }
 var allblock = document.getElementsByClassName("square");


 function getPossibleMovesInvexes() {
    var index = [];
     var j = 0;
     for (let i = 0; i < allblock.length; i++) {
         if (allblock[i].innerHTML == "") {
             index[j] = i;
             j++;
         }
     }
     return index
 }


 function computerMove() {
    var index = getPossibleMovesInvexes()
     var random = Math.floor(Math.random() * index.length);
     var randblock = index[random];
     allblock[randblock].innerHTML = "O";
     goo = 0;
     isGameOver()
 }

 function restart() {
     count = 0;
     goo = 0;
     game.innerHTML = "";
     for (let i = 0; i < 9; i++) {
         game.innerHTML;
     }
 }

// false - game running
// true - game over
 function isGameOver() {
     var rez = check();
     var index = getPossibleMovesInvexes()
     if (!!rez) {
         switch (rez) {
             case 1:
                 goo = 1;
                 game.innerHTML = "You win!";
                 break;
             case 2:
                 goo = 1;
                 game.innerHTML = "Computer win!";
                 break;
         }
     } else {
         if (index.length == 0) {
             goo = 1;
             game.innerHTML = "Tie!";
         }
     }
     if (!!rez || index.length == 0) {
         setTimeout(restart, 3000);
         return true
     }
     return false
 }


 function check() {
     var combo = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
     ];
     for (let i = 0; i < combo.length; i++) {
         if (allblock[combo[i][0]].innerHTML == "X" && allblock[combo[i][1]].innerHTML == "X" && allblock[combo[i][2]].innerHTML == "X") return 1;
         if (allblock[combo[i][0]].innerHTML == "O" && allblock[combo[i][1]].innerHTML == "O" && allblock[combo[i][2]].innerHTML == "O") return 2;
     }
 }

 game.onclick = function(e) {
     if (goo == 0) {
         if (e.target.innerHTML == "") {
             e.target.innerHTML = "X";
             goo = 1;
             if (!isGameOver()) {
                setTimeout(computerMove, 1000);
             }
         }
     }
 }