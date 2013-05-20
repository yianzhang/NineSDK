function Body (_fs) {
	var self = this;
	
	var fs;
	if (_fs && _fs instanceof FaceSet && _fs.isABody()) {
		fs = _fs;
	}else {
//		fs = new FaceSet();
		return undefined;
	}
/*	
	var _family = self;
	
	//this.family
	Object.defineProperty(this, "family", {
		get : function () {
			if (_family == self) {
				return _family;
			} else {
				return _family = _family.family;
			}
		},
		set: function (x) {
			if (x && (x instanceof Triangle || x instanceof Face || x instanceof Body)) {
				_family = x;
			}
		},
		enumerable : true,
		configurable : false,
	});
*/		
/*	
	this.push = function (face) {
		fs.push(face);
	};
	
	this.unshift = function (face) {
		fs.unshift(face);
	}
*/
	this.faceAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=fs.length) return undefined;
		return fs[i];
	};

	//this.faceLength
	Object.defineProperty(this, "faceLength", {
		get : function () {return fs.length;}, 
		enumerable : true, 
		configurable : false,
	});
	
	this.toString = function () {
		return "Body{" + fs + "}";
	};
	
	Object.defineProperties(this,{
//		push : {writable : false, enumerable : true, configurable : false,},
//		unshift : {writable : false, enumerable : true, configurable : false,},
		faceAt : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
}