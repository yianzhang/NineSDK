function PolylineSet () {
	var self = this;
	
	this.push = function (pl) {
		if (pl && pl instanceof Line) {
			[].push.call(self, pl);
		}
	};
	
	this.unshift = function (pl) {
		if (pl && pl instanceof Line) {
			[].unshift.call(self, this);
		}
	};
	
	//
	
	this.toString = function () {
		var tmp = "PolylineSet{length:" + self.length + ", ";
		for (var i=0;i<self.length;++i) {
			tmp += i + ":" + self[i] + ", ";
		}
		return tmp += "}";
	};
	
	Object.defineProperties(this,{
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}

PolylineSet.prototype = new Array;
PolylineSet.prototype.constructor = PolylineSet;

Object.defineProperties(PolylineSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});