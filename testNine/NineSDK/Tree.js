function Tree(props) {
	this.items = {};
	this.count = 0;
	this.item = null;
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
	
	var self = this;
	this._divNode.on("click","span.nineTreeItemText",function() {
		var list = $(this).parentsUntil("div","li");
		list = [].reverse.apply(list);
					
		var item = self;
		for (var i=0;i<list.length;i++) {
			for (var j in item.items) {
				if (item.items[j].title == $(list[i]).children("span:last").text()) {
					item = item.items[j];
					break;
				}
			}
		}
		
		self._divNode.find("span.nineTreeItemText").css({
			"background-color":"transparent",
			"color":props["font_color"],
		});
		if (self.item == item) {
			self.item = null;
		} else {
			item._spanNode.css({
				"background-color":props["selected_color"],
				"color":props["bgcolor"],
			});
			self.item = item;
		}
	});
	
	this.change(function(){});
}

Tree.prototype.addItem = function (title,data) {
	var item = new TreeItem(title,this,1,this._props,data || {});
	
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

Tree.prototype.change = function (handler,context) {
	this._divNode.off("change","input:checkbox");
	
	var self = this;
	this._divNode.on("change","input:checkbox",function () {
		var _ulNode = $(this).nextAll("ul");
		var _liNode = $(this).parent();
		
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
		
		if ($.isFunction(handler))
			($.proxy(handler,context || self.selectedItem() || $(this).parent()))();
	});
}

Tree.prototype.items = function (i) {
	return this.items[i];
}

Tree.prototype.selectedItem = function () {
	return this.item;
}
