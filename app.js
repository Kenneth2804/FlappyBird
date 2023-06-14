document.addEventListener('DOMContentLoaded', () =>{


const bird = document.querySelector('.bird')
const game = document.querySelector('.container')
const piso = document.querySelector('.piso')
const scoreDisplay = document.querySelector('.score')

let birdLeft = 220
let birdBottom = 100
let gravedad = 2
let inGame = false
let gap = 430
let puntuacion = 0
let scoreUpdate = false

function Startgame() {
	birdBottom -= gravedad
	bird.style.bottom = birdBottom + 'px'
	bird.style.left = birdLeft + 'px'

if (!inGame && scoreUpdate && game.querySelector('.obstaculo').offsetLeft < birdLeft) {
	puntuacion++;
	scoreDisplay.innerHTML = puntuacion;
	scoreUpdate = false;
}
}
let tiempoid = setInterval(Startgame, 20);

function control(e) {
	
	if (e.keyCode === 32) {

		saltar()
	}
}
function saltar() {
	if (birdBottom<500)  birdBottom += 50
		bird.style.bottom = birdBottom + 'px'
	console.log(birdBottom)
}
document.addEventListener('keyup', control)


function crearobstaculos() {

	let obstaculoleft = 500
	let alturaRandom = Math.random() * 60
	let obstaculoBottom = alturaRandom
	const obstaculo = document.createElement('div')
	const topObstaculo = document.createElement('div')

	if (!inGame) {
		obstaculo.classList.add('obstaculo')
		topObstaculo.classList.add('topObstaculo')
	}

game.appendChild(obstaculo)
game.appendChild(topObstaculo)

obstaculo.style.left = obstaculoleft + 'px'
topObstaculo.style.left = topObstaculo + 'px'

obstaculo.style.bottom = obstaculoBottom + 'px'
topObstaculo.style.bottom = obstaculoBottom + gap + 'px'


function moverObstaculo() {
	
	obstaculoleft -= 2
	obstaculo.style.left = obstaculoleft + 'px'
	topObstaculo.style.left = obstaculoleft + 'px'

if (obstaculoleft === -60) {
	clearInterval(tiempoid)
	game.removeChild(obstaculo)
	game.removeChild(topObstaculo)
}else if(obstaculoleft === 220){
	if (!obstaculo.sumado) {
		puntuacion++;
		scoreDisplay.innerHTML = puntuacion
		obstaculo.sumado = true
}
	}

if (obstaculoleft > 200 && obstaculoleft <288 && birdLeft === 220 &&( birdBottom < obstaculoBottom + 100 || birdBottom > obstaculoBottom + gap -250)|| birdBottom === 10) 
{

	gameOver()
	clearInterval(timeid)
}

}
let timeid = setInterval(moverObstaculo, 20)
if (!inGame) setTimeout(crearobstaculos, 3000) 

}

crearobstaculos()

function gameOver(){
	clearInterval(tiempoid)
	console.log("SE TE ACABO EL JUEGO ARAÑA")
	inGame = true
	document.removeEventListener('keyup', control)
}}
)