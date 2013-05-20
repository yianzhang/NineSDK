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
		
		for (var i=0;i<self.length;++i) {
			for (var j=i+2;j<self.length;++j) {
				if (Line.isJoined(self[i],self[j])) {
					var tmp = self[i+1];
					self[i+1] = self[j];
					self[j] = tmp;
					break;
				}
			}
		}
		
		var ls = new LoopSet();
		for (var i=0;i<self.length;) {
			for (var j=i+1;j<self.length;++j) {
				if (Line.isJoined(self[j],self[i])) {
					var ps = self.polylineSet.apply(self.slice(i,j+1));
					if (ps) ls.push(new Loop(ps));
					i = j+1;
				}
			}
		}
		
		return ls;
	};
	
	this.polylineSet = function () {
		var self = this;
		
		for (var i=0;i<self.length-1;++i) {
			if (!Line.isJoined(self[i],self[i+1])) {
				return undefined;
			}
		}
		if (!Line.isJoined(self[self.length-1],self[0])) {
			return undefined;
		}
		
		var ps = new PolylineSet();
		for (var i=0;i<self.length;++i) {
			for (var j=ps.length-1;j>=0;--j) {
				var tmpl = ps[j].lineAt(ps[j].lineLength-1);
				if (Line.isJoined(tmpl,self[i])) {
					var v0 = Line.toVector(tmpl);
					var v1 = Line.toVector(self[i]);
					if (Vector.angle(v0,v1)<LIMIT_IN_SAME_POLYLINE) {
						ps[j].push(self[i]);
						break;
					}
				}
				
				var tmpl = ps[j].lineAt(0);
				if (Line.isJoined(self[i],tmpl)) {
					var v0 = Line.toVector(self[i]);
					var v1 = Line.toVector(tmpl);
					if (Vector.angle(v0,v1)<LIMIT_IN_SAME_POLYLINE) {
						ps[j].unshift(self[i]);
						break;
					}
				}
				
				var p = new Polyline();
				p.push(self[i]);
				ps.push(p);
			}
		}
		
		return ps;
	};
	
	this.isALoop = function () {
		var self = this;
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
}

LineSet.prototype = new Array;
LineSet.prototype.constructor = LineSet;

Object.defineProperties(LineSet.prototype,{
	length : {writable : true, enumerable : false},
	constructor : {writable : false, enumerable : false, configurable : false,},
});