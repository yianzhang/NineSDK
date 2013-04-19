function MenuItem (text,lev) {
	this.items = {};
	this.lev = lev;

	this.node = this._liNode = $("<li/>");
	this._liNode.addClass("menuItem"+(this.lev>1?2:this.lev));

	this._aNode = $("<a/>");
	this._aNode.addClass("menuAnchor"+(this.lev>1?2:this.lev));
	this._aNode.attr("href","#");
	this._aNode.html(text);

	this._ulNode = $("<ul/>");
	this._ulNode.addClass("menuList"+(this.lev>0?2:1));

	this._liNode.append(this._aNode);
	this._liNode.append(this._ulNode);
}

MenuItem.prototype.addItem = function (text) {
	var item = new MenuItem(text,this.lev+1);
	this.items[text] = item;
	
	this._ulNode.append(item.node);
	
	return item;
}
