//class
class Point{


	constructor(private x?: number, private y?: number) {		
	}


	draw() {
		console.log('X: ' + this.x + ', Y: ' + this.y);
	}


	// getter & setter
	getX() {
		return this.x;
	}


	setX(value) {
		if (value < 0) {
			throw new Error('value cannot be less than 0.');

		this.x = value;			
			
		}
	}

}


let point = new Point(1,2);

let x = point.getX();
point.setX(5);
let xNew = point.getX();
console.log('X old: ' + x + ' and X new: ' + xNew);

point.draw();