function Polyline (_ls) {
	var self = this;
	
	var ls;
	if (_ls && _ls instanceof LineSet) {
		ls = _ls;
	} else {
//		ls = new LineSet();
		return undefined;
	}
/*	
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
*/	
	this.lineAt = function (i) {
		if (i==undefined || !$.isNumeric(i)) return undefined;
		if (i<0 || i>=ls.length) return undefined;
		return ls[i];
	};
	
	//this.lineLength
	Object.defineProperty(this, "lineLength", {
		get : function () {return ls.length;}, 
		enumerable : true, 
		configurable : false,
	});
	
	this.toString = function () {
		return "Polyline{" + ls + "}";
	};
	
	Object.defineProperties(this, {
		push : {writable : false, enumerable : true, configurable : false,},
		unshift : {writable : false, enumerable : true, configurable : false,},
		lineAt : {writable : false, enumerable : true, configurable : false,},
		toString : {enumerable : false},
	});
}
