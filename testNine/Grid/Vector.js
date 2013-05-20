function Vector (__x,__y,__z) {
	var	_x = __x || 0, 
		_y = __y || 0,
		_z = __z || 0;

	//this.x
	Object.defineProperty(this, "x", {
		get : function () {return _x},
//		set : function (__x) {if ($.isNumeric(__x)) _x = __x},
		enumerable : true,
		configurable : false,
	});
	
	//this.y
	Object.defineProperty(this, "y", {
		get : function () {return _y},
//		set : function (__y) {if ($.isNumeric(__y)) _y = __y},
		enumerable : true,
		configurable : false,
	});
	
	//this.z
	Object.defineProperty(this, "z", {
		get : function () {return _z},
//		set : function (__z) {if ($.isNumeric(__z)) _z = __z},
		enumerable : true,
		configurable : false,
	});
	
	//this.length
	Object.defineProperty(this, "length", {
		get : function () {
			return Math.sqrt(_x*_x+_y*_y+_z*_z);
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.negator
	Object.defineProperty(this, "negator", {
		get : function () {
			return new Vector(-_x, -_y, _z);
		},
		enumerable : true,
		configurable : false,
	});
	
	this.toString = function () {
		return "Vector{x:" + _x + ", y:" + _y + ", z:" + _z +"}"; 
	};
	
	Object.defineProperties(this,{
		toString : {enumerable : false,},
	});
}

Vector.crossProduct = function (v0,v1) {
	if (!(v0 && v0 instanceof Vector) || !(v1 && v1 instanceof Vector)) return null;
	var x = v0.y*v1.z-v0.z*v1.y;
	var y = v0.z*v1.x-v0.x*v1.z;
	var z = v0.x*v1.y-v0.y*v1.x;
	return new Vector(x,y,z);
}

Vector.dotProduct = function (v0,v1) {
	if (!(v0 && v0 instanceof Vector) || !(v1 && v1 instanceof Vector)) return undefined;
	return v0.x*v1.x + v0.y*v1.y + v0.z*v1.z;
}

Vector.angle = function (v0,v1) {
	if (!(v0 && v0 instanceof Vector) || !(v1 && v1 instanceof Vector)) return undefined;
	var dp = Vector.dotProduct(v0,v1);
	var tmp = dp/v0.length/v1.length;
	return Math.acos(tmp);
}
