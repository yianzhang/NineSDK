function CallBoard (props) {
	this._props = props;
	
	this.node = this._divNode = $("<div/>");
	this._divNode.addClass("nineCallBoard");
	this._divNode.css({
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
	
	this._ulNode = $("<ul/>");
	this._ulNode.addClass("nineCallBoardUl");
	
	this._divNode.append(this._ulNode);
}

CallBoard.prototype.clear = function () {
	this._ulNode.empty();
}

CallBoard.prototype.writeln = function (text) {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	if (h<10) h = "0"+h;
	if (m<10) m = "0"+m;
	if (s<10) s = "0"+s;
	var time = "["+h+":"+m+":"+s+"]  ";
	
	var _liNode = $("<li/>");
	_liNode.addClass("nineCallBoardLi");
	_liNode.text(time+text);
	
	this._ulNode.append(_liNode);
	this._divNode.scrollTop(999999999);
}

CallBoard.prototype.update = function (text) {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	if (h<10) h = "0"+h;
	if (m<10) m = "0"+m;
	if (s<10) s = "0"+s;
	var time = "["+h+":"+m+":"+s+"]  ";
	
	var _liNode = this._ulNode.find("li:last");
	if (_liNode)
		_liNode.text(time+text);
	
	this._divNode.scrollTop(999999999);
}
