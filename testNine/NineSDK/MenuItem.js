function MenuItem(text,lev,props) {
	this.items = {};
	this.lev = lev;
	this._props = props;

	this.node = this._liNode = $("<li/>");
	this._liNode.addClass("nineMenuItem"+(lev>1?2:lev));
	this._liNode.html((lev>0?"&nbsp;&nbsp;":"")+text);
	this._liNode.css({
		"background-color":props["bgcolor"],
		"width":props["item_width"],
		"height":props["item_height"],
		"line-height":props["item_height"],
		"color":props["font_color"],
		"font-size":props["font"+(lev>0?"1":"0")+"_size"],
		"font-family":props["font"+(lev>0?"1":"0")+"_family"],
		"font-weight":props["font"+(lev>0?"1":"0")+"_weight"],
	});
	this._liNode.hover(
		function () {
			$(this).css("background-color",props["bgcolor:hover"]);
		},
		function () {
			$(this).css("background-color",props["bgcolor"]);
		}
	);
	
	this._ulNode = $("<ul/>");
	this._ulNode.addClass("nineMenuList"+(lev>0?2:1));
	if (this.lev>0)
		this._ulNode.css({
			"left":props["item_width"],
		});
		
	this._liNode.append(this._ulNode);
}

MenuItem.prototype.addItem = function (text) {
	var item = new MenuItem(text,this.lev+1,this._props);
	this.items[text] = item;
	
	this._ulNode.append(item.node);
	
	return item;
}

MenuItem.prototype.click = function (handler,context) {
	if ($.isFunction(handler)) {
		this._liNode.click($.proxy(handler,context || this._liNode));
	}
}

MenuItem.prototype.itemAt = function (i) {
	return this.items[i];
}
