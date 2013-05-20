function Face (_ts) {
	var self = this;
	
	var ts;
	if (_ts && _ts instanceof TriangleSet && _ts.isAFace()) {
		ts = _ts;
	} else {
//		ts = new TriangleSet();
		return undefined;
	}
	
	var ls = loopSet();

	this.triangleAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ts.length) return undefined;
		return ts[i];
	};

	//this.triangleLength
	Object.defineProperty(this, "triangleLength", {
		get : function () {return ts.length;}, 
		enumerable : true, 
		configurable : false,
	});
	
	this.loopAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ls.length) return undefined;
		return ls[i];
	};
	
	//this.loopLength
	Object.defineProperty(this, "loopLength", {
		get : function () {return ls.length;}, 
		enumerable : true, 
		configurable : false,
	});
	
	this.toString = function () {
		return "Face{" + ts + "; " + ls + "}";
	};
	
	Object.defineProperties(this,{
		triangleAt : {writable : false, enumerable : true, configurable : false,},
		loopAt : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
	
	function loopSet() {
		var ls = new LineSet();
		for (var i=0;i<ts.length;++i) {
			ls.push(ts[i].l0);
			ls.push(ts[i].l1);
			ls.push(ts[i].l2);
		}
		
		for (var i=0;i<ls.length-1;++i) {
			for (var j=i+1;j<ls.length;++j) {
				if (Line.isSameLine(ls[i],ls[j])) {
					ls[i] = ls[j] = undefined;
				}
			}
		}
		for (var i=0;i<ls.length;) {
			if (!ls[i]) {
				var j=i+1;
				while (j<ls.length && !ls[j]) ++j;
				ls.splice(i,j-i);
			} else {
				++i;
			}
		}
		
		return ls.loopSet();		
	}
}

Face.inSameBody = function (f0,f1) {
	if (!(f0 && f0 instanceof Face) || !(f1 && f1 instanceof Face)) {
		return false;
	}
	
	var e0 = f0.edge,
		e1 = f1.edge;
		
	for (var i=0;i<e0.length;++i) {
		for (var j=0;j<e1.length;++j) {
			if (Line.isSameLine(e0[i],e1[j])) {
				return true;
			}
		}
	}
	
	return false;
}