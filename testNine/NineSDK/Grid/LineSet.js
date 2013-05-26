function LineSet () {
	var self = this;
	
	this.push = function (line) {
		var self = this;
		if (line && line instanceof Line) {
			[].push.call(self, line);
		}
	};
	
	this.unshift = function (line) {
		var self = this;
		if (line && line instanceof Line) {
			[].unshift.call(self, line);
		}
	};
	
	this.loopSet = function () {
		var self = this;
		join(self);
		
		var ls = new LoopSet();
		for (var i=0;i<self.length;) {
			for (var j=i+1;j<self.length;++j) {
				if (Line.isJoined(self[j],self[i])) {
					var _ls = new LineSet();
					for (var k = i;k<=j;++k) {
						_ls.push(self[k]);
					}
					i = j+1;
					
					var ps = _ls.polylineSet();
					if (ps) ls.push(new Loop(ps));
				}
			}
		}

		return ls;
	};
	
	this.polylineSet = function () {
		var self = this;
		join(self);
		
		var lsa = [];
		for (var i=0;i<self.length;++i) {
			if (lsa.length>0) {
				if (Line.isJoined(self[i-1],self[i])) {
					var v0 = self[i-1].toVector();
					var v1 = self[i].toVector();
					if (Vector.angle(v0,v1)<LIMIT_IN_SAME_POLYLINE) {
						lsa[lsa.length-1].push(self[i]);
						continue;
					}
				}
			}
			
			var _ls = new LineSet();
			_ls.push(self[i]);
			lsa.push(_ls);
		}
		
		if (lsa.length>1) {
			var tmpl = self[self.length-1];
			if (Line.isJoined(tmpl,self[0])) {
				var v0 = tmpl.toVector();
				var v1 = self[0].toVector();
				if (Vector.angle(v0,v1)<LIMIT_IN_SAME_POLYLINE) {
					for (var i=lsa[lsa.length-1].length-1;i>=0;--i) {
						lsa[0].unshift(lsa[lsa.length-1][i]);
					}
					lsa.pop();
				}
			}
		}
		
		var ps = new PolylineSet();
		for (var i=0;i<lsa.length;++i) {
			ps.push(new Polyline(lsa[i]));
		}

		return ps;
	};
	
	this.isALoop = function () {
		var self = this;
		if (self.length<2) return true;
		
		for (var i=0;i<self.length-1;++i) {
			if (!Line.isJoined(self[i], self[i+1]))
				return false;
		}
		if (!Line.isJoined(self[self.length-1],self[0])) 
			return false;
			
		return true;
	};
	
	this.isAPolyline = function () {
		var self = this;
		if (self.length<2) return true;
		
		for (var i=0;i<self.length-1;++i) {
			if (!Line.isJoined(self[i], self[i+1]))
				return false;
		}
		
		return true;
	};
	
	this.toString = function () {
		var tmp = "LineSet{length:" + self.length + ", ";
		for (var i=0;i<self.length;++i) {
			tmp += i + ":" + self[i] + ", ";
		}
		return tmp += "}";
	};
	
	Object.defineProperties(this,{
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		loopSet : {writable : false, enumerable : false, configurable : false,},
		polylineSet : {writable : false, enumerable : false, configurable : false,},
		isALoop : {writable : false, enumerable : false, configurable : false,},
		isAPolyline : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
	
	function join(ls) {
		for (var i=0;i<ls.length;++i) {
			for (var j=i+2;j<ls.length;++j) {
				if (Line.isJoined(ls[i],ls[j])) {
					var tmp = ls[i+1];
					ls[i+1] = ls[j];
					ls[j] = tmp;
					break;
				}
			}
		}
	}
}

LineSet.prototype = new Array;
LineSet.prototype.constructor = LineSet;

Object.defineProperties(LineSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});
