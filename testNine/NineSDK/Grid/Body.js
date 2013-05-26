function Body (_fs) {
	var self = this;
	
	var fs;
	if (_fs && _fs instanceof FaceSet && _fs.isABody()) {
		fs = _fs;
	}else {
//		fs = new FaceSet();
		return undefined;
	}

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
		faceAt : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
}
