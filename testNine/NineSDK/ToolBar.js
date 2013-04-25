function ToolBar(props) {
	this.items = {};
	this._props = props;
	
	this.node = this._divNode = $("<div/>");
	this._divNode.addClass("nineToolBar");
	this._divNode.css({
		"background-color":props["bgcolor"],
		"padding":props["padding"],
		"margin":props["margin"],
		"border":props["border"],
		"-webkit-box-flex":props["box_flex"],
		"-moz-box-flex":props["box_flex"],
	});
}

ToolBar.prototype.addItem = function (text,url) {
	var item = new ToolItem(url,this._props);
	this.items[text] = item;
	
	this._divNode.append(item.node);
	
	return item;
}

ToolBar.prototype.itemAt = function (i) {
	return this.items[i];
}
