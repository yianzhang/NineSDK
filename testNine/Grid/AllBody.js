function AllBody (_bs) {
	var self = this;
	
	var bs;
	if (_bs && _bs instanceof BodySet) {
		bs = _bs;
	} else {
		bs = new BodySet();
	}
	
	this.push = function (body) {
		bs.push(body);
	};
	
	this.unshift = function (body) {
		bs.unshift(body);
	}
	
	this.bodyAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return false;
		if (i<0 || i>=bs.length) return false;
		return bs[i];
	};
	
	this.bodyLength = function () {
		return bs.length;
	};
	
	this.toString = function () {
		return "AllBody{" + bs + "}";
	};
	
	Object.defineProperties(this,{
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		bodyAt : {writable : false, enumerable : false, configurable : false,},
		bodyLength : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}