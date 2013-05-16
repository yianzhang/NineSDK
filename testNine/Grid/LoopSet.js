function LoopSet () {
	var self = this;
	
	this.push = function (line) {
		if (line && line instanceof Line) {
			[].push.call(self, line);
		}
	};
	
	this.unshift = function (line) {
		if (line && line instanceof Line) {
			[].unshift.call(self, this);
		}
	};
	
	//
	
	this.toString = function () {
		var tmp = "LoopSet{length:" + self.length + ", ";
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

LoopSet.prototype = new Array;
LoopSet.prototype.constructor = LoopSet;

Object.defineProperties(LoopSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});