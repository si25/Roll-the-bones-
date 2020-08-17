class Roll {
	constructor(n){
		this.numberOfDie = n;
		this.randomArray = this.randomize(this.numberOfDie);
		this.drawRoll = this.newRoll(this.randomArray);
	}

	randomize(n) {
		const resultsArray = [];
		let dieNumber = n;
		for (let i=0; i < dieNumber; i++) {
			let random = Math.floor(Math.random()*6)+1;
			resultsArray.push(random);

		}


		return resultsArray;
	}

	newRoll(array) {
		let currentDie = document.getElementsByClassName('die-image');
		let newRoll = array; 

		// console.log(currentDie);
		// console.log(newRoll);

		for (let i=0; i < currentDie.length; i++) {
			currentDie[i].setAttribute('src', `img/${array[i]}.png`);
		}

		// for (let i=0; i < currentDie; i++) {
		// 	let dieIndex = currentDie[i];
		// }


	}

}

