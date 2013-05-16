function TriangleSet() {
	var self = this;
	
	this.push = function (tri) {
		if (tri && tri instanceof Triangle) {
			[].push.call(self,tri);
		}
	};
	
	this.unshift = function (tri) {
		if (tri && tri instanceof Triangle) {
			[].unshift.call(self,tri);
		}
	};
	
	this.faceSet = function () {
		for (var i=0;i<self.length-1;++i) {
			for (var j=i+1;j<self.length;++j) {
				if (Triangle.inSameFace(self[i],self[j])) {
					self[i].family.family = self[j].family;
				}
			}
		}
		
		var fs = new FaceSet();
		for (var i=0;i<self.length;++i) {
			if (self[i].family == self[i]) {
				var face = new Face();
				self[i].family = face;
				fs.push(face);
			}
		}
		for (var i=0;i<self.length;++i) {
			self[i].family.push(self[i]);
		}
		
		return fs;
	};
	
	this.toString = function () {
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
		toString : {enumerable : false},
	});
}

TriangleSet.prototype = new Array();
TriangleSet.prototype.constructor = TriangleSet;

Object.defineProperties(TriangleSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});
