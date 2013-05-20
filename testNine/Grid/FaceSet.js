function FaceSet () {
	var self = this;
	
	this.push = function (face) {
		var self = this;
		if (face && face instanceof Face) {
			[].push.call(self,face);
		}
	};
	
	this.unshift = function (face) {
		var self = this;
		if (face && face instanceof Face) {
			[].unshift.call(self,face);
		}
	};
	
	this.bodySet = function () {
		var clan = [];
		for (var i=0;i<self.length;++i) {
			clan[i] = i;
		}
		
		for (var i=0;i<self.length-1;++i) {
			for (var j=i+1;j<self.length;++j) {
				if (Face.inSameBody(self[i],self[j])) {
					clan[getclan(i)] = getclan(j);
				}
			}
		}
		
		var fsa = [];
		for (var i=0;i<self.length;++i) {
			if (getclan(i) == i) {
				fsa[i] = new FaceSet();
			} 
		}
		for (var i=0;i<self.length;++i) {
			fsa[getclan(i)].push(self[i]);
		}
		
		var bs = new BodySet();
		for (var i=0;i<self.length;++i) {
			if (fsa[i]) {
				bs.push(new Body(fsa[i]));
			}
		}
		
		return bs;
		
		function getclan(i) {
			if (clan[i]==i) return i;
			return clan[i] = getclan(clan[i]);
		}
	};
	
	this.isABody = function () {
		return true;
	};
	
	this.toString = function () {
		var self = this;
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
		isABody : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}

FaceSet.prototype = new Array();
FaceSet.prototype.constructor = FaceSet;

Object.defineProperties(FaceSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});
