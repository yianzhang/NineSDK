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
	
	this.toString = function () {
		return "AllBody{" + bs + "}";
	};
	
	Object.defineProperties(this,{
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}