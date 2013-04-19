function TreeItem(text,lev,props) {
	this.items ={};
	this.lev = lev;
	this._props = props;
	
	this.node = this._liNode = $("<li/>");
	this._liNode.addClass("nineTreeItem");
	
	this._aNode = $("<a/>");
	this._aNode.text("▶");
	this._aNode.attr("href","#");
	this._aNode.addClass("nineTreeItemText");
	this._aNode.css("color",props["font_color"]);
	
	this._checkboxNode = $("<input/>");
	this._checkboxNode.attr("type","checkbox");
	this._checkboxNode.val(text);
	
	this._spanNode = $("<span/>");
	this._spanNode.text(text);
	this._spanNode.addClass("nineTreeItemText");
	
	this._spanNode.css({
		"color":props["font_color"],
		"font-size":props["font_size"],
		"font-weight":props["font_weight"],
		"font-family":props["font_family"],
	});
	
	this._ulNode = $("<ul/>");
	this._ulNode.addClass("nineTreeItemUl");
	
	this._liNode.append(this._aNode);
	this._liNode.append(this._checkboxNode);
	this._liNode.append(this._spanNode);
	this._liNode.append(this._ulNode);
	
	//fold & unfold
	var _isFolded = true;
	var _aNode = this._aNode;
	var _ulNode = this._ulNode;
	this._aNode.click(function () {
		if (_isFolded) {
			_aNode.text("▼");
			_ulNode.css("display","block");
		} else {
			_aNode.text("▶");
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

TreeItem.prototype.addItem = function (text) {
	var item = new TreeItem(text,this.lev+1,this._props);
	
	this.items[text] = item;
	this._ulNode.append(item.node);
	
	return item;
}
