function ToolBar() {
	this.items = {};
	
	this.node = this._tableNode = $("<table/>");
	this._tableNode.addClass("toolBar");
	
	this._trNode = $("<tr/>");
	
	this._tableNode.append(this._trNode);
}

ToolBar.prototype.addItem = function (text,url) {
	var item = new ToolItem(url);
	this.items[text] = item;
	
	this._trNode.append(item.node);
	
	return item;
}
