function SolidSet () {
	var self = this;
	
	this.push = function (solid) {
		var self = this;
		if (solid && solid instanceof Solid) {
			[].push.call(self,solid);
		}
	};
	
	this.unshift = function (solid) {
		var self = this;
		if (solid && solid instanceof Solid) {
			[].unshift.call(self,solid);
		}
	};
	
	this.toString = function () {
		var self = this;
		var tmp = "SolidSet{length:" + self.length + ", ";
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

SolidSet.prototype = new Array();
SolidSet.prototype.constructor = SolidSet;

Object.defineProperties(SolidSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});
