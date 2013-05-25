function PointSet () {
	var self = this;
	
	this.push = function (p) {
		if (p && p instanceof Point) {
			[].push.call(this, p);
		}
	};
	
	this.unshift = function (p) {
		if (p && p instanceof Point) {
			[].unshift.call(this, p);
		}
	};
	
	this.indexOfPoint = function (p) {
		if (!(p && p instanceof Point))
			return -1;
			
		for (var i=0;i<this.length;++i) {
			if (this[i] == p) {
				return i;
			}
		}
		
		return -1;
	};
	
	this.indexOfCoord = function (x, y, z) {
		if (x==undefined || !$.isNumeric(x) ||
			y==undefined || !$.isNumeric(y) ||
			z==undefined || !$.isNumeric(z)
		) {
			return -1;
		}
		
		for (var i=0;i<this.length;++i) {
			if (Math.abs(x-this[i].x) < LIMIT_ERROR &&
				Math.abs(y-this[i].y) < LIMIT_ERROR &&
				Math.abs(z-this[i].z) < LIMIT_ERROR
			) {
				return i;
			}
		}
		
		return -1;
	};
	
	this.toString = function () {
		var tmp = "PointSet{length:" + this.length + ", ";
		for (var i=0;i<this.length;++i) {
			tmp += i + ":" + this[i] + ", ";
		}
		return tmp += "}";
	};
	
	Object.defineProperties(this, {
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		indexOfPoint : {writable : false, enumerable : false, configurable : false,},
		indexOfCoord : {writable : false, enumerable : false, configurable : false,},
		toString : {writable : false, enumerable : false, configurable : false,},
	});
}

PointSet.prototype = new Array;
PointSet.prototype.constructor = PointSet;

Object.defineProperties(PointSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});
