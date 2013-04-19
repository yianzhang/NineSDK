function MenuBar() {
	this.items = {};
	
	this.node = this._divNode = $("<div/>");
	
	this._ulNode = $("<ul/>");
	this._ulNode.addClass("menuList0");

	this._divNode.append(this._ulNode);
}

MenuBar.prototype.addItem = function (text) {
	var item = new MenuItem(text,0);
	this.items[text] = item;				
	
	this._ulNode.append(item.node);
	
	return item;
}
