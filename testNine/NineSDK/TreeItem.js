function TreeItem(title,parent,lev,props,_data) {
	var items ={};
	var count = 0;
	var data = _data || {};
	var _liNode, _triNode, _checkboxNode, _spanNode, _ulNode;
	
	init();

	//this.node
	Object.defineProperty(this, "node", {
		get : function () {
			return _liNode;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.title
	Object.defineProperty(this, "title", {
		get : function () {
			return title;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.parent
	Object.defineProperty(this, "parent", {
		get : function () {
			return parent;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.level
	Object.defineProperty(this, "level", {
		get : function () {
			return lev;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.items
	Object.defineProperty(this, "items", {
		get : function () {
			return items;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.itemLength
	Object.defineProperty(this, "itemLength", {
		get : function () {
			return count;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.data
	Object.defineProperty(this, "data", {
		get : function () {
			return data;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.addItem = function (title,data) {
		var item = new TreeItem(title,this,lev+1,props,data || {});
		
		items[title] = item;
		count++;
		_ulNode.append(item.node);
		
		return item;
	}
	
	this.isChecked = function () {
		return _checkboxNode[0].checked;
	}
	
	this.filterCheckedItems = function () {
		var result = [];
		for (var i in items) {
			if (items[i].isChecked()) {
				result.push(items[i]);
			}
			
			$.merge(result,items[i].filterCheckedItems());
		}
		
		return result;
	}
	
	this.deleteItems = function() {
		//remove children & children'children & ...
		for (var i in items)
			items[i].deleteItems();
		
		//remove from parent.items
		if (parent) {
			delete parent.items[title];
			parent.count--;
			parent = undefined;
		}
			
		//remove Dom node
		_liNode.remove();
	}
	
	this.itemAt = function (i) {
		return items[i];
	}
	
	this.selected = function () {
		var _divNode = _liNode.parents("div").eq(0);
		_divNode.find("span.nineTreeItemText").css({
			"background-color":"transparent",
			"color":props["font_color"],
		});
		
		_spanNode.css({
			"background-color":props["selected_color"],
			"color":props["bgcolor"],
		});
	}
	
	this.unselected = function () {
		_spanNode.css({
			"background-color":"transparent",
			"color":props["font_color"],
		});
	}
	
	Object.defineProperties(this, {
		addItem : {writable : false, enumerable : true, configurable : false,},
		isChecked : {writable : false, enumerable : true, configurable : false,},
		filterCheckedItems : {writable : false, enumerable : true, configurable : false,},
		deleteItems : {writable : false, enumerable : true, configurable : false,},
		selected : {writable : false, enumerable : true, configurable : false,},
		unselected : {writable : false, enumerable : true, configurable : false,},
		itemAt : {writable : false, enumerable : true, configurable : false,},
	});
	
	function init() {
/**
 * dom structure
 *	<li><span/><input:checkbox/><span/><ul/></li> 
 */

		_liNode = $("<li/>");
		_liNode.addClass("nineTreeItem");
		
		_triNode = $("<span/>");
		_triNode.text("▶");
		_triNode.addClass("nineTreeItemTriangle");
		_triNode.css("color",props["font_color"]);
		
		_checkboxNode = $("<input/>");
		_checkboxNode.attr("type","checkbox");
		_checkboxNode.val(title);
		
		_spanNode = $("<span/>");
		_spanNode.text(title);
		_spanNode.addClass("nineTreeItemText");
		
		_spanNode.css({
			"color":props["font_color"],
			"font-size":props["font_size"],
			"font-weight":props["font_weight"],
			"font-family":props["font_family"],
		});
		
		_ulNode = $("<ul/>");
		_ulNode.addClass("nineTreeItemUl");
		
		_liNode.append(_triNode);
		_liNode.append(_checkboxNode);
		_liNode.append(_spanNode);
		_liNode.append(_ulNode);
		
		//fold & unfold
		var _isFolded = true;
		_triNode.click(function () {
			if (_isFolded) {
				_triNode.text("▼");
				_ulNode.css("display","block");
			} else {
				_triNode.text("▶");
				_ulNode.css("display","none");
			}
			_isFolded = !_isFolded;
		});
	}
}
