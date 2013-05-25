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
	
	this.toString = function () {
		return "AllBody{" + bs + "; " + ps + "}";
	};
	
	Object.defineProperties(this,{
		bodyAt : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
}