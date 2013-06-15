function Solid (_ts) {
	var self = this;
	
	var ts;
	if (_ts && _ts instanceof TriangleSet && _ts.isAFace()) {
		ts = _ts;
	} else {
//		ts = new TriangleSet();
		return undefined;
	}

	this.triangleAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ts.length) return undefined;
		return ts[i];
	};

	//this.triangleLength
	Object.defineProperty(this, "triangleLength", {
		get : function () {return ts.length;}, 
		enumerable : true, 
		configurable : false,
	})
	
	this.toString = function () {
		return "Solid{" + ts + "}";
	};
	
	Object.defineProperties(this,{
		triangleAt : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
}
