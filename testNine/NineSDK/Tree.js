function Tree(props) {
	this.items = {};
	this.count = 0;
	this._props = props;
	
	this.node = this._divNode = $("<div/>");
	this._divNode.addClass("nineTreeDiv");
	this._divNode.css({
		"background-color":props["bgcolor"],
		"width":props["width"],
		"height":props["height"],
		"padding":props["padding"],
		"margin":props["margin"],
		"border":props["border"],
		"-webkit-box-flex":props["box_flex"],
		"-moz-box-flex":props["box_flex"],
	});
	
	this._ulNode = $("<ul/>");
	this._ulNode.addClass("nineTreeUl");
	
	this._divNode.append(this._ulNode);
}

Tree.prototype.addItem = function (title,data) {
	var item = new TreeItem(title,data || {},null,0,this._props);
	
	this.items[title] = item;
	this.count++;
	this._ulNode.append(item.node);
	
	return item;
}

Tree.prototype.filterCheckedItems = function () {
	var items = this.items;
	var result = [];
	for (var i in items) {
		if (items[i].checked()) {
			result.push(items[i]);
		}
		
		$.merge(result,items[i].filterCheckedItems());
	}
	
	return result;
}

Tree.prototype.deleteCheckedItems = function () {
	var tmp = this.filterCheckedItems();
	for (var i=0;i<tmp.length;i++) {
		if (tmp[i]) {
			tmp[i].deleteItems();
		}
	}
}
