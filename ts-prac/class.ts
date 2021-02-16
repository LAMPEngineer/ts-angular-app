//class
class Point{



	constructor(private x?: number, private y?: number) {		

	}


	draw() {
		console.log('X: ' + this.x + ', Y: ' + this.y);
	}


	// getter & setter
	get X() {
		return this.x;
	}


	set X(value) {

		if (value < 0)
			throw new Error('value cannot be less than 0.');					
		
		this.x = value;
	}

}


let point = new Point(1,3);

let x = point.X;
point.X = 6;
let xNew = point.X;

console.log('X old: ' + x + ' and X new: ' + xNew);

point.draw();