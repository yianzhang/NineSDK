function LoopSet () {
	var self = this;
	
	this.push = function (loop) {
		if (loop && loop instanceof Loop) {
			[].push.call(self, loop);
		}
	};
	
	this.unshift = function (loop) {
		if (loop && loop instanceof Loop) {
			[].unshift.call(self, loop);
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
