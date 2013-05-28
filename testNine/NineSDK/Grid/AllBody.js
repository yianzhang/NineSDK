function AllBody (_bs, _ps) {
	var self = this;
	
	var bs;
	if (_bs && _bs instanceof BodySet) {
		bs = _bs;
	} else {
//		bs = new BodySet();
		return undefined;
	}
	
	var ps;
	if (_ps && _ps instanceof PointSet) {
		ps = _ps;
	} else {
//		ps = new PointSet();
		return undefined;
	}
	
	this.bodyAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=bs.length) return undefined;
		return bs[i];
	};

	//this.bodyLength
	Object.defineProperty(this, "bodyLength", {
		get : function () {return bs.length;},
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
			if (objArr[i] instanceof Body) {
				result = result.concat(indexArrayOfTriBody(objArr[i]));
			} else if (objArr[i] instanceof Face) {
				result = result.concat(indexArrayOfTriFace(objArr[i]));
			} else if (objArr[i] instanceof Triangle) {
				result = result.concat(indexArrayOfTriTriangle(objArr[i]));
			} 
		}
		
		return result;
	}
	
	this.indexArrayOfLine = function (objArr) {
		var result = [];
		for (var i=0;i<objArr.length;++i) {
			if (objArr[i] instanceof Body) {
				result = result.concat(indexArrayOfLineBody(objArr[i]));
			} else if (objArr[i] instanceof Face) {
				result = result.concat(indexArrayOfLineFace(objArr[i]));
			} else if (objArr[i] instanceof Triangle) {
				result = result.concat(indexArrayOfLineTriangle(objArr[i]));
			} else if (objArr[i] instanceof Loop) {
				result = result.concat(indexArrayOfLineLoop(objArr[i]));
			} else if (objArr[i] instanceof Polyline) {
				result = result.concat(indexArrayOfLinePolyline(objArr[i]));
			} else if (objArr[i] instanceof Line) {
				result = result.concat(indexArrayOfLineLine(objArr[i]));
			} else if (objArr[i] instanceof Point) {
//				result = result.concat(indexArrayOfPoint(objArr[i]));
			}
		}
		
		return result;
	}
	
	this.toString = function () {
		return "AllBody{" + bs + "; " + ps + "}";
	};
	
	Object.defineProperties(this,{
		bodyAt : {writable : false, enumerable : true, configurable : false,},
		pointAt : {writable : false, enumerable : true, configurable : false,},
		pointIndexOfPoint : {writable : false, enumerable : true, configurable : false,},
		pointSetToFloatArray : {writable : false, enumerable : true, configurable : false,},
		indexArrayOfTri : {writable : false, enumerable : true, configurable : false,},
		indexArrayOfLine : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
	
	function indexArrayOfTriBody(b) {
		var result = [];
		for (var i=0;i<b.faceLength;++i) {
			result = result.concat(indexArrayOfTriFace(b.faceAt(i)));
		}
		
		return result;
	}
	
	function indexArrayOfTriFace(f) {
		var result = [];
		for (var i=0;i<f.triangleLength;++i) {
			result = result.concat(indexArrayOfTriTriangle(f.triangleAt(i)));
		}

		return result;
	}
	
	function indexArrayOfTriTriangle(t) {
		return [ps.indexOfPoint(t.p0), ps.indexOfPoint(t.p1), ps.indexOfPoint(t.p2)];
	}
	
	function indexArrayOfLineBody(b) {
		var result = [];
		for (var i=0;i<b.faceLength;++i) {
			result = result.concat(indexArrayOfLineFace(b.faceAt(i)));
		}
		
		return result;
	}
	
	function indexArrayOfLineFace(f) {
		var result = [];
		for (var i=0;i<f.triangleLength;++i) {
			result = result.concat(indexArrayOfLineTriangle(f.triangleAt(i)));
		}

		return result;
	}
	
	function indexArrayOfLineTriangle(t) {
		return [ps.indexOfPoint(t.p0), ps.indexOfPoint(t.p1),
				ps.indexOfPoint(t.p1), ps.indexOfPoint(t.p2),
				ps.indexOfPoint(t.p2), ps.indexOfPoint(t.p0)
		];
	}
	
	function indexArrayOfLineLoop(l) {
		var result = [];
		for(var i=0;i<l.polylineLength;++i) {
			result = result.concat(indexArrayOfLinePolyline(l.polylineAt(i)));
		}
		
		return result;
	}
	
	function indexArrayOfLinePolyline(p) {
		var result = [];
		for (var i=0;i<p.lineLength;++i) {
			result.push(ps.indexOfPoint(p.lineAt(i).p0));
			result.push(ps.indexOfPoint(p.lineAt(i).p1));
		}
		
		return result;
	}
	
	function indexArrayOfLine(l) {
		return [ps.indexOfPoint(l.p0), ps.indexOfPoint(l.p1)];
	}
	
	function indexArrayOfPoint(p) {
		return [ps.indexOfPoint(p)];
	}
}
