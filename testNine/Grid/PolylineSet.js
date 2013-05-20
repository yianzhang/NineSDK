function PolylineSet () {
	var self = this;
	
	this.push = function (pl) {
		if (pl && pl instanceof Polyline) {
			[].push.call(self, pl);
		}
	};
	
	this.unshift = function (pl) {
		if (pl && pl instanceof Polyline) {
			[].unshift.call(self, pl);
		}
	};
	
	this.isALoop = function () {
		var self = this;
		if (self.length<2) return true;
		
		for (var i=0;i<self.length-1;++i) {
			if (!Line.isJoined(self[i].lineAt(self[i].lineLength-1),self[i+1].lineAt(0)))
				return false;
		}
		if (!Line.isJoined(self[self.length-1].lineAt(self[self.length-1].lineLength-1),self[0].lineAt(0)))
			return false;
			
		return true;
	};
	
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
		isALoop : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}

PolylineSet.prototype = new Array;
PolylineSet.prototype.constructor = PolylineSet;

Object.defineProperties(PolylineSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});