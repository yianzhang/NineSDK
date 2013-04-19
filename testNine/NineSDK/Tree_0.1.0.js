function Tree() {
	this.items = {};
	
	this.node = this._divNode = $("<div/>");
	this._divNode.addClass("nineTreeDiv");
	
	this._ulNode = $("<ul/>");
	this._ulNode.addClass("nineTreeUl");
	
	this._divNode.append(this._ulNode);
}

Tree.prototype.addItem = function (text) {
	var item = new TreeItem(text,0);
	
	this.items[text] = item;
	this._ulNode.append(item.node);
	
	return item;
}
