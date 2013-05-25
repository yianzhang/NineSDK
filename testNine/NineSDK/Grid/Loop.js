function Loop (_ps) {
	var self = this;
	
	var ps;
	if (_ps && _ps instanceof PolylineSet && _ps.isALoop()) {
		ps = _ps;
	} else {
//		ps = new PolylineSet();
		return undefined;
	}

	this.polylineAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ps.length) return undefined;
		return ps[i];
	};
	
	//this.polylineLength
	Object.defineProperty(this, "polylineLength", {
		get : function () {return ps.length;}, 
		enumerable : true, 
		configurable : false,
	});
	
	this.toString = function () {
		return "Loop{" + ps + "}";
	};
	
	Object.defineProperties(this, {
		polylineAt : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
}
