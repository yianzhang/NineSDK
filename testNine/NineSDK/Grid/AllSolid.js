function AllSolid (_ss, _ps) {
	var self = this;
	
	var ss;
	if (_ss && _ss instanceof SolidSet) {
		ss = _ss;
	} else {
//		ss = new SolidSet();
		return undefined;
	}
	
	var ps;
	if (_ps && _ps instanceof PointSet) {
		ps = _ps;
	} else {
//		ps = new PointSet();
		return undefined;
	}
	
	this.solidAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ss.length) return undefined;
		return ss[i];
	};

	//this.solidLength
	Object.defineProperty(this, "solidLength", {
		get : function () {return ss.length;},
		enumerable : true,
		configurable : false,
	});
	
	this.pointAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ps.length) return undefined;
		return ps[i];
	}
	
	//this.pointLength
	Object.defineProperty(this, "pointLength", {
		get : function () {return ps.length;},
		enumerable : true,
		configurable : false,
	});
	
	this.pointIndexOfPoint = function (p) {
		return ps.indexOfPoint(p);
	};
	
	this.pointSetToFloatArray = function () {
		var result = [];
		for (var i=0;i<ps.length;++i) {
			result.push(ps[i].x);
			result.push(ps[i].y);
			result.push(ps[i].z);
		}
		
		return result;
	};
	
	this.indexArrayOfTri = function (objArr) {
		var result = [];
		for (var i=0;i<objArr.length;++i) {
			if (objArr[i] instanceof Solid) {
				result = result.concat(indexArrayOfTriSolid(objArr[i]));
			} else if (objArr[i] instanceof Triangle) {
				result = result.concat(indexArrayOfTriTriangle(objArr[i]));
			} 
		}
		
		return result;
	}
	
	this.indexArrayOfLine = function (objArr) {
		var result = [];
		for (var i=0;i<objArr.length;++i) {
			if (objArr[i] instanceof Solid) {
				result = result.concat(indexArrayOfLineSolid(objArr[i]));
			} else if (objArr[i] instanceof Triangle) {
				result = result.concat(indexArrayOfLineTriangle(objArr[i]));
			} else if (objArr[i] instanceof Line) {
				result = result.concat(indexArrayOfLineLine(objArr[i]));
			} else if (objArr[i] instanceof Point) {
//				result = result.concat(indexArrayOfPoint(objArr[i]));
			}
		}
		
		return result;
	}
	
	this.toString = function () {
		return "AllBody{" + ss + "; " + ps + "}";
	};
	
	Object.defineProperties(this,{
		solidAt : {writable : false, enumerable : true, configurable : false,},
		pointAt : {writable : false, enumerable : true, configurable : false,},
		pointIndexOfPoint : {writable : false, enumerable : true, configurable : false,},
		pointSetToFloatArray : {writable : false, enumerable : true, configurable : false,},
		indexArrayOfTri : {writable : false, enumerable : true, configurable : false,},
		indexArrayOfLine : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
	
	function indexArrayOfTriSolid(s) {
		var result = [];
		for (var i=0;i<s.triangleLength;++i) {
			result = result.concat(indexArrayOfTriTriangle(s.triangleAt(i)));
		}

		return result;
	}
	
	function indexArrayOfTriTriangle(t) {
		return [ps.indexOfPoint(t.p0), ps.indexOfPoint(t.p1), ps.indexOfPoint(t.p2)];
	}
	
	function indexArrayOfLineSolid(s) {
		var result = [];
		for (var i=0;i<s.triangleLength;++i) {
			result = result.concat(indexArrayOfLineTriangle(s.triangleAt(i)));
		}

		return result;
	}
	
	function indexArrayOfLineTriangle(t) {
		return [ps.indexOfPoint(t.p0), ps.indexOfPoint(t.p1),
				ps.indexOfPoint(t.p1), ps.indexOfPoint(t.p2),
				ps.indexOfPoint(t.p2), ps.indexOfPoint(t.p0)
		];
	}
	
	function indexArrayOfLine(l) {
		return [ps.indexOfPoint(l.p0), ps.indexOfPoint(l.p1)];
	}
	
	function indexArrayOfPoint(p) {
		return [ps.indexOfPoint(p)];
	}
}
