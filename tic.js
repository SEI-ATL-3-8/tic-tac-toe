const allSquares = document.querySelectorAll('.available')
let turn = 0

const square_0 = document.querySelector('#square_0')
const square_1 = document.querySelector('#square_1')
const square_2 = document.querySelector('#square_2')
const square_3 = document.querySelector('#square_3')
const square_4 = document.querySelector('#square_4')
const square_5 = document.querySelector('#square_5')
const square_6 = document.querySelector('#square_6')
const square_7 = document.querySelector('#square_7')
const square_8 = document.querySelector('#square_8')

const take_turns = () => {
	const add_x = () => {
		for(let i = 0; i < allSquares.length; i++){
			allSquares[i].addEventListener('click', (event) =>{
				if(event.target.classList.contains('available') && (turn % 2 == 0)){
					event.target.classList.add('x-pic')
					event.target.classList.remove('available')
					turn += 1
					if(square_0.classList.contains('x-pic') && square_1.classList.contains('x-pic') && square_2.classList.contains('x-pic') ||
					square_3.classList.contains('x-pic') && square_4.classList.contains('x-pic') && square_5.classList.contains('x-pic') ||
					square_6.classList.contains('x-pic') && square_7.classList.contains('x-pic') && square_8.classList.contains('x-pic') ||
					square_0.classList.contains('x-pic') && square_3.classList.contains('x-pic') && square_6.classList.contains('x-pic') ||
					square_1.classList.contains('x-pic') && square_4.classList.contains('x-pic') && square_7.classList.contains('x-pic') ||
					square_2.classList.contains('x-pic') && square_5.classList.contains('x-pic') && square_8.classList.contains('x-pic') ||
					square_0.classList.contains('x-pic') && square_4.classList.contains('x-pic') && square_8.classList.contains('x-pic') ||
					square_2.classList.contains('x-pic') && square_4.classList.contains('x-pic') && square_6.classList.contains('x-pic')){ 
						alert('X wins') 
						location.reload()
					}
				}
			})
		}
	}
	add_x()
	const add_o = () => {
		for(let i = 0; i < allSquares.length; i++){
			allSquares[i].addEventListener('click', (event) =>{
				if(event.target.classList.contains('available') && (turn % 2 != 0)){
					event.target.classList.add('o-pic')
					event.target.classList.remove('available')
					turn += 1
					if(square_0.classList.contains('o-pic') && square_1.classList.contains('o-pic') && square_2.classList.contains('o-pic') ||
					square_3.classList.contains('o-pic') && square_4.classList.contains('o-pic') && square_5.classList.contains('o-pic') ||
					square_6.classList.contains('o-pic') && square_7.classList.contains('o-pic') && square_8.classList.contains('o-pic') ||
					square_0.classList.contains('o-pic') && square_3.classList.contains('o-pic') && square_6.classList.contains('o-pic') ||
					square_1.classList.contains('o-pic') && square_4.classList.contains('o-pic') && square_7.classList.contains('o-pic') ||
					square_2.classList.contains('o-pic') && square_5.classList.contains('o-pic') && square_8.classList.contains('o-pic') ||
					square_0.classList.contains('o-pic') && square_4.classList.contains('o-pic') && square_8.classList.contains('o-pic') ||
					square_2.classList.contains('o-pic') && square_4.classList.contains('o-pic') && square_6.classList.contains('o-pic')){ 
						alert('O wins')
						location.reload() 
					}
				}
			})
		}
	}
	add_o()
}

take_turns()

const newGame = document.querySelector('.new-game-btn')
newGame.addEventListener('click', (event) => location.reload())