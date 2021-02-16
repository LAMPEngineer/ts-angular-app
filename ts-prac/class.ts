//class
class Point{



	constructor(private _x?: number, private _y?: number) {		

	}


	draw() {
		console.log('X: ' + this._x + ', Y: ' + this._y);
	}


	// getter & setter
	get x() {
		return this._x;
	}


	set x(value) {

		if (value < 0)
			throw new Error('value cannot be less than 0.');					
		
		this._x = value;
	}

}


let point = new Point(2,4);

let x = point.x;
point.x = 5;
let xNew = point.x;

console.log('X old: ' + x + ' and X new: ' + xNew);

point.draw();