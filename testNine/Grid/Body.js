function Body (_fs) {
	var self = this;
	
	var fs;
	if (_fs && _fs instanceof FaceSet) {
		fs = _fs;
	}else {
		fs = new FaceSet();
	}
	
	var _family = self;
	
	this.push = function (face) {
		fs.push(face);
	};
	
	this.unshift = function (face) {
		fs.unshift(face);
	}
	
	this.faceAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=fs.length) return undefined;
		return fs[i];
	};
	
	this.faceLength = function () {
		return fs.length;
	};
	
	this.toString = function () {
		return "Body{" + fs + "}";
	};
	
	Object.defineProperties(this,{
		family : {
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
		},
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		faceAt : {writable : false, enumerable : false, configurable : false,},
		faceLength : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}