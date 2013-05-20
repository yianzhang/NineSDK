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
		var _ls = new LineSet();
		for (var i=0;i<ts.length;++i) {
			_ls.push(ts[i].l0);
			_ls.push(ts[i].l1);
			_ls.push(ts[i].l2);
		}
		
		for (var i=0;i<_ls.length-1;++i) {
			for (var j=i+1;j<_ls.length;++j) {
				if (Line.isSameLine(_ls[i],_ls[j])) {
					_ls[i] = _ls[j] = undefined;
				}
			}
		}
		for (var i=0;i<_ls.length;) {
			if (!_ls[i]) {
				var j=i+1;
				while (j<_ls.length && !_ls[j]) ++j;
				_ls.splice(i,j-i);
			} else {
				++i;
			}
		}

		return _ls.loopSet();		
	}
}

Face.inSameBody = function (f0,f1) {
	if (!(f0 && f0 instanceof Face) || !(f1 && f1 instanceof Face)) {
		return false;
	}
		
	for (var i0=0;i0<f0.loopLength;++i0) 
	for (var j0=0;j0<f0.loopAt(i0).polylineLength;++j0) 
	for (var k0=0;k0<f0.loopAt(i0).polylineAt(j0).lineLength;++k0) {
		for (var i1=0;i1<f1.loopLength;++i1) 
		for (var j1=0;j1<f1.loopAt(i1).polylineLength;++j1) 
		for (var k1=0;k1<f1.loopAt(i1).polylineAt(j1).lineLength;++k1) {
			if (Line.isSameLine(f0.loopAt(i0).polylineAt(j0).lineAt(k0),
								f1.loopAt(i1).polylineAt(j1).lineAt(k1))
			) {
				return true;
			}
		}
	}
	
	return false;
}