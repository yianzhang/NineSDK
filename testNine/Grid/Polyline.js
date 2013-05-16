function Polyline (_ls) {
	var self = this;
	
	var ls;
	if (_ls && _ls instanceof LineSet) {
		ls = _ls;
	} else {
		ls = new LineSet();
	}
	
	this.push = function (line) {
		if (Line.isJoined(self[self.length-1],line)) {
			ls.push(line);
		}
	};
	
	this.unshift = function (line) {
		if (Line.isJoined(line, self[0])) {
			ls.unshift(line);
		}
	};
	
	this.lineAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ls.length) return undefined;
		return ls[i];
	};
	
	this.lineLength = function (i) {
		return ls.length;
	};
	
	this.toString = function () {
		return "Polyline{" + ls + "}";
	};
	
	Object.defineProperties(this, {
		push : {writable : false, enumerable : false, configurable : false,},
		unshift : {writable : false, enumerable : false, configurable : false,},
		lineAt : {writable : false, enumerable : false, configurable : false,},
		lineLength : {writable : false, enumerable : false, configurable : false,},
		toString : {enumerable : false},
	});
}
