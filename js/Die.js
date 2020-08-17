

class Die {
	constructor(d, x) {
		// this.sides = 6;
		// this.color = color;
		// this.id = id
		this.draw = this.drawDie(d, x);

	}


	drawDie(d, x) {
		// console.log(d, x);
		const area = document.getElementById('dice');
		const dieDraw = document.createElement('div');
		const imgEl = document.createElement('img');
		const diceOnPage = document.getElementsByClassName('die');

		if (x === 'up') {
			for (let i=0; i < d; i++) {
				area.appendChild(dieDraw);
				dieDraw.setAttribute('class', 'die');
				dieDraw.appendChild(imgEl);
				imgEl.setAttribute('src', `img/${Math.floor(Math.random()*6)+1}.png`);
				imgEl.setAttribute('class', 'die-image')

			}
		} else if (x === 'down') {
			diceOnPage[0].remove();
		}
	}





}

