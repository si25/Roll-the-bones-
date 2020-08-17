
class Game {
	constructor() {
		this.dieNumber = 1;
		this.dice = this.createDie(this.dieNumber);
	}


	dieNumberChange(e) {
		let target = e.target;
		if (target.id === 'die-selector-up') {
			this.dieNumber += 1;
			this.createDie(this.dieNumber, 'up');
			this.handleDieHtml(this.dieNumber);
		} else if (this.dieNumber === 1) {

		} else {
			this.dieNumber -= 1;
			this.createDie(this.dieNumber, 'down');
			this.handleDieHtml(this.dieNumber);
		};
		// console.log(this.dieNumber);
		return this.dieNumber;
	}

	handleDieHtml(d) {
		// console.log(d);
		const el = document.getElementById('die-number');
		// console.log(el);
		el.innerHTML = `${d} X`;
	}


	createDie(n, x) {
		const die = new Die(n, x);	
	}

	rollDice(e){
		let target = e.target;
		let die = this.dieNumber
		const roll = new Roll(this.dieNumber);
	}

}

