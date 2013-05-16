function FaceSet () {
	var self = this;
	
	this.push = function (face) {
		if (face && face instanceof Face) {
			[].push.call(self,face);
		}
	};
	
	this.unshift = function (face) {
		if (face && face instanceof Face) {
			[].unshift.call(self,face);
		}
	};
	
	this.bodySet = function () {
		for (var i=0;i<self.length-1;++i) {
			for (var j=i+1;j<self.length;++j) {
				if (Face.inSameBody(self[i],self[j])) {
					self[i].family.family = self[j].family;
				}
			}
		}
		
		var bs = new BodySet();
		for (var i=0;i<self.length;++i) {
			if (self[i].family == self[i]) {
				var body = new Body();
				self[i].family = body;
				bs.push(body);
			} 
		}
		for (var i=0;i<self.length;++i) {
			self[i].family.push(self[i]);
		}
		
		return bs;
	};
	
	this.toString = function () {
		var tmp = "FaceSet{length:" + self.length + ", ";
		for (var i=0;i<self.length;++i) {
			tmp += i + ":" + self[i] + ", ";
		}
		return tmp += "}";
	};
	
	Object.defineProperties(this,{
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		bodySet : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}

FaceSet.prototype = new Array();
FaceSet.prototype.constructor = FaceSet;

Object.defineProperties(FaceSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});