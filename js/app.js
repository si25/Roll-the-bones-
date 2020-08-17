
const game = new Game();

document.getElementById('lets-roll').addEventListener('click', function(){
	const bears = document.getElementById('bears');
	const container = document.getElementById('lets-rolls-container');

	bears.classList.add('lets-roll-clicked');
	container.classList.add('lets-roll-clicked');

	document.getElementById('die-area').style.display='flex';
	document.getElementById('dice').style.display='flex';
	document.getElementsByClassName('die-selector')[0].style.display='flex';
	document.getElementsByClassName('roll-container')[0].style.display='inherit';
});

document.getElementById('die-selector-up').addEventListener('click', function(event) {
	game.dieNumberChange(event);
	// console.log(game.dieNumber)
})

document.getElementById('die-selector-down').addEventListener('click', function(event) {
	game.dieNumberChange(event);
})

document.getElementById('roll').addEventListener('click', function(event){
	game.rollDice(event);
})


