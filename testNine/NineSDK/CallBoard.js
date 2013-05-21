function CallBoard (props) {
	var _divNode, _ulNode;

	init();

	//this.node
	Object.defineProperty(this, "node", {
		get : function () {
			return _divNode;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.clear = function () {
		_ulNode.empty();
	};
	
	this.writeln = function (text) {
		var time = getTime();
		
		var _liNode = $("<li/>");
		_liNode.addClass("nineCallBoardLi");
		_liNode.text(time + "  " + text);
		
		_ulNode.append(_liNode);
//		_divNode.scrollTop(999999999);
		_divNode.scrollTop(this._divNode[0].scrollHeight);
	};
	
	this.update = function (text) {
		var _liNode = _ulNode.find("li:last");
		if (!_liNode.length) {
			this.writeln(text);
			return;
		}
		
		var time = getTime();
	
		_liNode.text(time + "  " + (text || " "));
		
//		_divNode.scrollTop(999999999);
		_divNode.scrollTop(this._divNode[0].scrollHeight);
	};
	
	Object.defineProperties(this, {
		clear : {writable : false, enumerable : true, configurable : false,},
		writeln : {writable : false, enumerable : true, configurable : false,},
		update : {writable : false, enumerable : true, configurable : false,},
	});
	
	function init () {
		_divNode = $("<div/>");
		_divNode.addClass("nineCallBoard");
		_divNode.css({
			"background-color":props["bgcolor"],
			"padding":props["padding"],
			"margin":props["margin"],
			"border":props["border"],
			"width":props["width"],
			"height":props["height"],
			"-webkit-box-flex":props["box_flex"],
			"-moz-box-flex":props["box_flex"],
			"color":props["font_color"],
			"font-size":props["font_size"],
			"font-weight":props["font_weight"],
			"font-family":props["font_family"],
		});
		
		_ulNode = $("<ul/>");
		_ulNode.addClass("nineCallBoardUl");
		
		_divNode.append(_ulNode);
	}
	
	function getTime () {
		var date = new Date();
		var h = date.getHours();
		var m = date.getMinutes();
		var s = date.getSeconds();
		if (h<10) h = "0"+h;
		if (m<10) m = "0"+m;
		if (s<10) s = "0"+s;
		return "["+h+":"+m+":"+s+"]";
	}
}