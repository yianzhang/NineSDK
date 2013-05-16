function Loop (_ps) {
	var self = this;
	
	var ps;
	if (_ps && _ps instanceof PolylineSet) {
		ps = _ps;
	} else {
		ps = new PolylineSet();
	}
	
	this.push = function (p) {
		ps.push(p);
	};
	
	this.unshift = function (p) {
		ps.unshift(p);
	};
	
	this.polylineAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ps.length) return undefined;
		return ps[i];
	};
	
	this.polylineLength = function () {
		return ps.length;
	};
	
	this.toString = function () {
		return "Loop{" + ps + "}";
	};
	
	Object.defineProperties(this, {
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		polylineAt : {writable : false, enumerable : false, configurable : false,},
		polylineLength : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}
