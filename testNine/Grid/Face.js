function Face (_ts) {
	var self = this;
	
	var ts;
	if (_ts && _ts instanceof TriangleSet) {
		ts = _ts;
	} else {
		ts = new TriangleSet();
	}
	
	var _family = self;
	
	this.push = function (tri) {
		ts.push(tri);
	};
	
	this.unshift = function (tri) {
		ts.unshift(tri);
	};
	
	this.triangleAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ts.length) return undefined;
		return ts[i];
	};
	
	this.triangleLength = function () {
		return ts.length;
	};
	
	this.toString = function () {
		return "Face{" + ts + "}";
	};
	
	Object.defineProperties(this,{
		family : {
			get : function () {
				if (_family == self) {
					return _family;
				} else {
					return _family = _family.family;
				}
			},
			set: function (x) {
				if (x && (x instanceof Triangle || x instanceof Face || x instanceof Body)) {
					_family = x;
				}
			},
			enumerable : true,
			configurable : false,
		},
		edge : {
			get : function () {
				return filterEdge();
			},
			enumerable : true,
			configurable : false,
		},
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		triangleAt : {writable : false, enumerable : false, configurable : false,},
		triangleLength : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
	
	function filterEdge () {
		var ls = new LineSet();
		for (var i=0;i<ts.length;++i) {
			ls.push(ts[i].l0);
			ls.push(ts[i].l1);
			ls.push(ts[i].l2);
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