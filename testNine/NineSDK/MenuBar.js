function MenuBar(props) {
	this.items = {};
	this._props = props;
	
	this.node = this._divNode = $("<div/>");
	this._divNode.addClass("nineMenuDiv");
	this._divNode.css({
		"background-color":props["bgcolor"],
		"padding":props["padding"],
		"margin":props["margin"],
		"border":props["border"],
		"-webkit-box-flex":props["box_flex"],
		"-moz-box-flex":props["box_flex"],
	});
	
	this._ulNode = $("<ul/>");
	this._ulNode.addClass("nineMenuList0");

	this._divNode.append(this._ulNode);
}

MenuBar.prototype.addItem = function (text) {
	var item = new MenuItem(text,0,this._props);
	this.items[text] = item;
	
	this._ulNode.append(item.node);
	
	return item;
}
