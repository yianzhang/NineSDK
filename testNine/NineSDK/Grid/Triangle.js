function Triangle (__p0,__p1,__p2,__v) {
	var self = this;
	
	if (!(__p0 && __p0 instanceof Point) ||
		!(__p1 && __p1 instanceof Point) ||
		!(__p2 && __p2 instanceof Point) ||
		Point.isSamePoint(__p0, __p1) ||
		Point.isSamePoint(__p1, __p2) ||
		Point.isSamePoint(__p2, __p0)
	) {
		return undefined;
	}
	
	var _p0 = __p0,
		_p1 = __p1,
		_p2 = __p2;
		
	var _l0 = new Line(_p1, _p2),
		_l1 = new Line(_p2, _p0),
		_l2 = new Line(_p0, _p1);
	
	var tmpa = Vector.angle(_l0.toVector(), _l1.toVector());
	if (tmpa-0<LIMIT_ERROR ||
		Math.PI-tmpa<LIMIT_ERROR
	) {
		return undefined;
	}
	
	var _v;
	if (__v && __v instanceof Vector) {
		_v = __v;
	} else {
		_v = normalVector(_p0, _p1, _p2);
	}
	
	//this.p0
	Object.defineProperty(this, "p0", {
		get : function () {return _p0;},
/*		set : function (__p0) {if (__p0 instanceof Point) {
			_p0 = __p0;
			_l1 = new Line(_p2, _p0);
			_l2 = new Line(_p0, _p1);
			_v = normalVector(_p1, _p1, _p2);
		}},
*/
		enumerable : true,
		configurable : false,
	});
	
	//this.p1
	Object.defineProperty(this, "p1", {
		get : function () {return _p1;},
/*		set : function (__p1) {if (__p1 instanceof Point) {
			_p1 = __p1;
			_l0 = new Line(_p1, _p2);
			_l2 = new Line(_p0, _p1);
			_v = normalVector(_p1, _p1, _p2);
		}},
*/
		enumerable : true,
		configurable : false,
	});
	
	//this.p2
	Object.defineProperty(this, "p2", {
		get : function () {return _p2;},
/*		set : function (__p2) {if (__p2 instanceof Point) {
			_p2 = __p2;
			_l0 = new Line(_p1, _p2);
			_l1 = new Line(_p2, _p0);
			_v = normalVector(_p1, _p1, _p2);
		}},
*/
		enumerable : true,
		configurable : false,
	});
	
	//this.normal
	Object.defineProperty(this, "normal", {
		get : function () {return _v;},
		enumerable : true,
		configurable : false,
	});
	
	//this.l0
	Object.defineProperty(this, "l0", {
		get : function () {return _l0;},
		enumerable : true,
		configurable : false,
	});
	
	//this.l1
	Object.defineProperty(this, "l1", {
		get : function () {return _l1;},
		enumerable : true,
		configurable : false,
	});
	
	//this.l2
	Object.defineProperty(this, "l2", {
		get : function () {return _l2;},
		enumerable : true,
		configurable : false,
	});
	
		
	this.toString = function() {
		return "Triangle{p0:" + _p0 + ", p1:" + _p1 + ", p2:" + _p2 +", normal:" + _v + "}";
	};
	
	Object.defineProperties(this,{
		toString : {enumerable : false,},
	});
	
	function normalVector (p0, p1, p2) {
		var v1 = new Vector(p1.x-p0.x, p1.y-p0.y, p1.z-p0.z);
		var v2 = new Vector(p2.x-p0.x, p2.y-p0.y, p2.z-p0.z);
		return Vector.crossProduct(v1,v2);
	}
}

Triangle.inSameFace = function (t0,t1) {
	if (!(t0 && t0 instanceof Triangle) || !(t1 && t1 instanceof Triangle)) {
		return false;
	}
	
	var count = 0;
	if (Point.isSamePoint(t0.p0,t1.p0)) ++count;
	if (Point.isSamePoint(t0.p0,t1.p1)) ++count;
	if (Point.isSamePoint(t0.p0,t1.p2)) ++count;
	if (Point.isSamePoint(t0.p1,t1.p0)) ++count;
	if (Point.isSamePoint(t0.p1,t1.p1)) ++count;
	if (Point.isSamePoint(t0.p1,t1.p2)) ++count;
	if (Point.isSamePoint(t0.p2,t1.p0)) ++count;
	if (Point.isSamePoint(t0.p2,t1.p1)) ++count;
	if (Point.isSamePoint(t0.p2,t1.p2)) ++count;
	if (count!=2) {
		return false;
	}
	
	var v0 = t0.normal,
		v1 = t1.normal;	
	var angle = Vector.angle(v0,v1);
	
	if (0<=angle && angle<=LIMIT_IN_SAME_FACE) return true;
	return false;
}
