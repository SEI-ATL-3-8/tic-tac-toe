function makeAlert(){
    alert("Press Start!");
};

// Timer code

var countDownDate = new Date("March 15, 2021 8:48:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "That's It!!!";
    }
  }, 1000);


  var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementByClassName("timerButton").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementByClassName("timerButton").innerHTML = "That's It!!!";
    }
  }, 1000);


// hover

.occupied:hover {
    background-color: #ff3a3a;
  }


let main_board = ["", "", "", "", "", "", "", "", ""];


const the_board = document.querySelector("#thegame");

const render_board = () => {
  the_board.innerHTML = "";
  main_board.forEach((e, i) => {
    the_board.innerHTML += `<div id="space_${i}" class="space" onclick="addPlayerMove(${i})">${main_board[i]}</div>`;
    if (e == player || e == computer) {
      document.querySelector(`#space_${i}`).classList.add("occupied");
    }
  });
};

render_board();

const player = "X";
const computer = "O";

const addPlayerMove = e => {
  if (main_board[e] == "") {
    main_board[e] = player;
    render_board();
    addComputerMove();
  }
};

const addComputerMove = () => {
    do {
      selected = Math.floor(Math.random() * 9);
    } while (main_board[selected] != "");
    main_board[selected] = computer;
    render_board();
  };

let board_full = false;
  const check_board_complete = () => {
    let flag = true;
    main_board.forEach(element => {
      if (element != player && element != computer) {
        flag = false;
      }
    });
    board_full = !flag;
  };


const game_loop = () => {
    render_board();
    check_board_complete();
  };


const addPlayerMove = e => {
    if (!board_full && main_board[e] == "") {
      main_board[e] = player;
      game_loop();
      addComputerMove();
    }
  };

const addComputerMove = () => {
    if (!board_full) {
      do {
        selected = Math.floor(Math.random() * 9);
      } while (main_board[selected] != "");
      main_board[selected] = computer;
      game_loop();
    }
  };
