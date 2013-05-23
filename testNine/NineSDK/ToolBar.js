function ToolBar(props) {
	var items = {};
	var groups = {};
	var _divNode;
	
	init();
	
	//this.node
	Object.defineProperty(this, "node", {
		get : function () {
			return _divNode;
		}
	});
	
	this.addItem = function (name,url,advisory) {
		var item = new ToolItem(name,url,props,advisory || "");
		items[name] = item;
		
		_divNode.append(item.node);
		
		return item;
	}

	this.itemAt = function (i) {
		return items[i];
	}
	
	this.addGroup = function (name, advisory) {
		var group = new ToolGroup(name, props, advisory || "");
		groups[name] = group;
		
		_divNode.append(group.node);
		
		return group;
	};
	
	this.groupAt = function (i) {
		return groups[i];
	} ;
	
	Object.defineProperties(this, {
		addItem : {writable : false, enumerable : true, configurable : false,},
		itemAt : {writable : false, enumerable : true, configurable : false,},
		addGroup : {writable : false, enumerable : true, configurable : false,},
		GroupAt : {writable : false, enumerable : true, configurable : false,},
	})
	
	function init() {
		_divNode = $("<div/>");
		_divNode.addClass("nineToolBar");
		_divNode.css({
			"background-color":props["bgcolor"],
			"padding":props["padding"],
			"margin":props["margin"],
			"border":props["border"],
			"-webkit-box-flex":props["box_flex"],
			"-moz-box-flex":props["box_flex"],
		});
	}
}
