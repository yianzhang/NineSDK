function Point (__x,__y,__z) {
	Vector.apply(this,arguments);
	
	this.toString = function () {
		return "Point{x:" + this.x + ", y:" + this.y + ", z:" + this.z +"}"; 
	};
	
	Object.defineProperties(this,{
		toString : {
			enumerable : false,
		},
	});
}

Point.prototype = new Vector();
Point.prototype.constructor = Point;

Object.defineProperties(Point.prototype,{
	constructor : {writable : false, enumerable : false, configurable : false,},
});

Point.isSamePoint = function (p0,p1) {
	if (!(p0 && p0 instanceof Point) || !(p1 && p1 instanceof Point)) {
		return false;
	}
	if (Math.abs(p0.x-p1.x)<LIMIT_ERROR && Math.abs(p0.y-p1.y)<LIMIT_ERROR && Math.abs(p0.z-p1.z)<LIMIT_ERROR) {
		return true;
	}
	return false;
}
