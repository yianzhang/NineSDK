function Tree(props) {
	this.items = {};
	this._props = props;
	
	this.node = this._divNode = $("<div/>");
	this._divNode.addClass("nineTreeDiv");
	this._divNode.css({
		"width":props["width"],
		"height":props["height"],
		"padding":props["padding"],
		"background-color":props["bgcolor"],
	});
	
	this._ulNode = $("<ul/>");
	this._ulNode.addClass("nineTreeUl");
	
	this._divNode.append(this._ulNode);
}

Tree.prototype.addItem = function (text) {
	var item = new TreeItem(text,0,this._props);
	
	this.items[text] = item;
	this._ulNode.append(item.node);
	
	return item;
}
