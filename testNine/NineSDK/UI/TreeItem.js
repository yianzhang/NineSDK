function TreeItem(name,title,parent,lev,props,_data) {
	var items ={};
//	var count = 0;
	var data = _data || {};
	var _liNode, _triNode, _checkboxNode, _spanNode, _ulNode;
	
	init();

	//this.name
	Object.defineProperty(this, "name", {
		get : function () {
			return name;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.node
	Object.defineProperty(this, "node", {
		get : function () {
			return _liNode[0];
		},
		enumerable : true,
		configurable : false,
	});
	
	//node.object
	var self = this;
	Object.defineProperty(_liNode[0], "object", {
		get : function () {
			return self;
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
/*
	//this.items
	Object.defineProperty(this, "items", {
		get : function () {
			return items;
		},
		enumerable : true,
		configurable : false,
	});
*//*	
	//this.itemLength
	Object.defineProperty(this, "itemLength", {
		get : function () {
			return count;
		},
		enumerable : true,
		configurable : false,
	});
*/	
	//this.data
	Object.defineProperty(this, "data", {
		get : function () {
			return data;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.addItem = function (name,title,data) {
		var item = new TreeItem(name,title,this,lev+1,props,data || {});
		
		items[name] = item;
//		count++;
		_ulNode.append(item.node);
		
		return item;
	}
	
	this.deleteItem = function (name) {
		if (items[name]) {
			$(items[name].node).remove();
			delete items[name];
//			--count;
			return true;
		}
		return false;
	};
	
	this.isChecked = function () {
		return _checkboxNode[0].checked;
	}
	
	this.filterCheckedItems = function (bool) {
		var result = [];
		
		if (this.isChecked()) {
			result.push(this);
			
			if (!bool) return result;
		}
		
		for (var i in items) {
			$.merge(result,items[i].filterCheckedItems(bool));
		}
		
		return result;
	}
	
	this.del = function() {
		//remove children & children'children & ...
		for (var i in items)
			items[i].del();
		
		//remove from parent.items
		if (parent) {
			parent.deleteItem(name);
			parent = undefined;
		}
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
			"background-color":props["bgcolor:selected"],
//			"color":props["bgcolor"],
			"color":props["font_color:selected"],
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
		
		_checkboxNode = $("<input type='checkbox' />");
		_checkboxNode.prop("checked", true);
		_checkboxNode.val(name);
		
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
