//class
class Point{
	x: number;
	y: number;

	draw() {
		console.log('X: ' + this.x + ', Y: ' + this.y);
	}


	getDistance(another: Point) {
		//...
	}

}


let point = new Point();
point.draw();