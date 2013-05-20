function TriangleSet() {
	var self = this;
	
	this.push = function (tri) {
		var self = this;
		if (tri && tri instanceof Triangle) {
			[].push.call(self,tri);
		}
	};
	
	this.unshift = function (tri) {
		var self = this;
		if (tri && tri instanceof Triangle) {
			[].unshift.call(self,tri);
		}
	};
	
	this.faceSet = function () {
		var self = this;
		
		var clan = [];
		for (var i=0;i<self.length;++i)
			clan[i] = i;

		for (var i=0;i<self.length-1;++i) {
			for (var j=i+1;j<self.length;++j) {
				if (Triangle.inSameFace(self[i],self[j])) {
					clan[getclan(i)] = getclan(j);
				}
			}
		}
		
		var tsa = [];
		for (var i=0;i<self.length;++i) {
			if (getclan(i) == i) {
				tsa[i] = new TriangleSet(); 
			}
		}
		for (var i=0;i<self.length;++i) {
			tsa[getclan(i)].push(self[i]);
		}
		
		var fs = new FaceSet();
		for (var i=0;i<self.length;++i) {
			if (tsa[i]) {
				fs.push(new Face(tsa[i]));
			}
		}
		
		return fs;

		function getclan(i) {
			if (clan[i]==i) return i;
			return clan[i] = getclan(clan[i]);
		}
	};
	
	this.isAFace = function () {
		if (this.faceSet().length == 1)
			return true;
		return false;
	};
	
	this.toString = function () {
		var self = this;
		var tmp = "TriangleSet{length:" + self.length + ", ";
		for (var i=0;i<self.length;++i) {
			tmp += i + ":" + self[i] + ", ";
		}
		return tmp += "}";
	};
	
	Object.defineProperties(this,{
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		faceSet : {writable : false, enumerable : false, configurable : false,},
		isAFace : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}

TriangleSet.prototype = new Array();
TriangleSet.prototype.constructor = TriangleSet;

Object.defineProperties(TriangleSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});

