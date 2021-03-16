let currentTurn = 'x'
let winConditions = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7],
]

function toggleTurn() {
  if (currentTurn === 'x') {
    currentTurn = 'o'
  } else {
    currentTurn = 'x'
  }

  const display = document.getElementById('single-letter-turn')
  display.innerText = currentTurn
}

function playerWins(boxes, player) {
  boxes.forEach((box) => { box.classList.add('won') })
  setTimeout(() => { alert(`${player.toUpperCase()} wins!`) }, 50)
}

function checkWinner() {
  let hasWinner = false
  
  winConditions.forEach((wc) => {
    const boxes = wc.map((position) => document.getElementById(`box-${position}`))

    if (boxes[0].classList.contains('x') && boxes[1].classList.contains('x') && boxes[2].classList.contains('x')) {
      playerWins(boxes, 'x')
      hasWinner = true
    } else if (boxes[0].classList.contains('o') && boxes[1].classList.contains('o') && boxes[2].classList.contains('o')) {
      playerWins(boxes, 'o')
      hasWinner = true
    }
  })

  if (!hasWinner) { checkDraw() }
}

function checkDraw() {
  let countOfFilledCells = 0
  const boxes = document.querySelectorAll('.box')

  boxes.forEach((box) => {
    if (box.classList.contains('x') || box.classList.contains('o')) {
      countOfFilledCells ++
    }
  })

  if (countOfFilledCells === 9) {
    setTimeout(() => { alert('Game is a draw!') }, 50)
  }
}

document.querySelectorAll('.box').forEach((box) => {
  box.addEventListener('click', function(e) {
    e.target.classList.add(currentTurn)
    toggleTurn()
    checkWinner()
  })
})
