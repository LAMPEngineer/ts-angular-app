"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
//Point class
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    return Point;
}());
exports.Point = Point;
