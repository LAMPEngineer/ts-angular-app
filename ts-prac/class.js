//class
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // getter & setter
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(2, 4);
var x = point.x;
point.x = 5;
var xNew = point.x;
console.log('X old: ' + x + ' and X new: ' + xNew);
point.draw();
