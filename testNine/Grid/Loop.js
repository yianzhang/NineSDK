function Loop (_ps) {
	var self = this;
	
	var ps;
	if (_ps && _ps instanceof PolylineSet) {
		ps = _ps;
	} else {
//		ps = new PolylineSet();
		return undefined;
	}
/*	
	this.push = function (p) {
		ps.push(p);
	};
	
	this.unshift = function (p) {
		ps.unshift(p);
	};
*/	
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
//		push : {writable : false, enumerable : true, configurable : false,},
//		unshift : {writable : false, enumerable : true, configurable : false,},
		polylineAt : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
}
