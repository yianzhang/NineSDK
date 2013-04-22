function TreeItem(title,data,parent,lev,props) {
	this.items ={};
	this.title = title;
	this.data = data;
	this.count = 0;
	this.parent = parent;
	this.lev = lev;
	this._props = props;
	
	this.node = this._liNode = $("<li/>");
	this._liNode.addClass("nineTreeItem");
	
	this._triNode = $("<span/>");
	this._triNode.text("▶");
	this._triNode.addClass("nineTreeItemTriangle");
	this._triNode.css("color",props["font_color"]);
	
	this._checkboxNode = $("<input/>");
	this._checkboxNode.attr("type","checkbox");
	this._checkboxNode.val(title);
	
	this._spanNode = $("<span/>");
	this._spanNode.text(title);
	this._spanNode.addClass("nineTreeItemText");
	
	this._spanNode.css({
		"color":props["font_color"],
		"font-size":props["font_size"],
		"font-weight":props["font_weight"],
		"font-family":props["font_family"],
	});
	
	this._ulNode = $("<ul/>");
	this._ulNode.addClass("nineTreeItemUl");
	
	this._liNode.append(this._triNode);
	this._liNode.append(this._checkboxNode);
	this._liNode.append(this._spanNode);
	this._liNode.append(this._ulNode);
	
	//fold & unfold
	var _isFolded = true;
	var _triNode = this._triNode;
	var _ulNode = this._ulNode;
	this._triNode.click(function () {
		if (_isFolded) {
			_triNode.text("▼");
			_ulNode.css("display","block");
		} else {
			_triNode.text("▶");
			_ulNode.css("display","none");
		}
		_isFolded = !_isFolded;
	});
	
	//check & uncheck
	var _ulNode = this._ulNode;
	var _liNode = this._liNode;
	this._checkboxNode.change(function () {
		if (this.checked) {
			$(_ulNode).find("input:checkbox").prop("checked",true);
			$(_liNode).parents().children("input:checkbox").prop("checked",function () {
				var tmp = $(this).parent().children("ul").children("li");
				if (tmp.children("input:checkbox").length === tmp.children("input:checked").length)
					return true;
				else
					return false;
			});
		} else {
			$(_ulNode).find("input:checked").prop("checked",false);
			$(_liNode).parents().children("input:checked").prop("checked",false);
		}
	});
}

TreeItem.prototype.addItem = function (title,data) {
	var item = new TreeItem(title,data || {},this,this.lev+1,this._props);
	
	this.items[title] = item;
	this.count++;
	this._ulNode.append(item.node);
	
	return item;
}

TreeItem.prototype.checked = function () {
	return this._checkboxNode[0].checked;
}

TreeItem.prototype.filterCheckedItems = function () {
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

TreeItem.prototype.deleteItems = function() {
	//remove from parent.items
	if (this.parent) {
		delete this.parent.items[this.title];
		this.parent.count--;
		this.parent = null;
	}
	
	//remove children & children'children & ...
	for (var i in this.items)
		this.items[i].deleteItems();
	
	//remove Dom node
	this.node.remove();
}
