function AllBody (_bs) {
	var self = this;
	
	var bs;
	if (_bs && _bs instanceof BodySet) {
		bs = _bs;
	} else {
//		bs = new BodySet();
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
	
	this.toString = function () {
		return "AllBody{" + bs + "}";
	};
	
	Object.defineProperties(this,{
		bodyAt : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
}