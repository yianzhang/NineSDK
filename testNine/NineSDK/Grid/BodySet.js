function BodySet () {
	var self = this;
	
	this.push = function (body) {
		var self = this;
		if (body && body instanceof Body) {
			[].push.call(self,body);
		}
	};
	
	this.unshift = function (body) {
		var self = this;
		if (body && body instanceof Body) {
			[].unshift.call(self,body);
		}
	};
	
	this.toString = function () {
		var self = this;
		var tmp = "BodySet{length:" + self.length + ", ";
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

BodySet.prototype = new Array();
BodySet.prototype.constructor = BodySet;

Object.defineProperties(BodySet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});
