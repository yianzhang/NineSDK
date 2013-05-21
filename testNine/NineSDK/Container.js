function Container (props) {
	var items;
	var _divNode;

	init();
	
	//this.node
	Object.defineProperty(this, "node", {
		get : function () {
			return _divNode;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.addContainer = function (name,props) {
		var container = new Container(props);
		items[name] = container;
		_divNode.append(container.node);
		
		return container;
	}
	
	this.addMenu = function (name,props) {
		var menuBar = new MenuBar(props);
		items[name] = menuBar;
		_divNode.append(menuBar.node);
		
		return menuBar;
	}
		
	this.addToolBar = function (name,props) {
		var toolBar = new ToolBar(props);
		items[name] = toolBar;
		_divNode.append(toolBar.node);
		
		return toolBar;
	}
		
	this.addTree = function (name,props) {
		var tree = new Tree(props);
		items[name] = tree;
		_divNode.append(tree.node);
		
		return tree;
	}
	
	this.addCallBoard = function (name,props) {
		var callBoard = new CallBoard(props);
		items[name] = callBoard;
		_divNode.append(callBoard.node);
		
		return callBoard;
	}
	
	this.itemAt = function (name) {
		return items[name];
	}
	
	Object.defineProperties(this, {
		addContainer : {writable : false, enumerable : true, configurable : false,},
		addMenu : {writable : false, enumerable : true, configurable : false,},
		addToolBar : {writable : false, enumerable : true, configurable : false,},
		addTree : {writable : false, enumerable : true, configurable : false,},
		addCallBoard : {writable : false, enumerable : true, configurable : false,},
		itemAt : {writable : false, enumerable : true, configurable : false,},
	});
	
	function init () {
		items = {};
		
		_divNode = $("<div/>");
		_divNode.addClass("nineContainer");
		_divNode.css({
			"margin":props["margin"],
			"padding":props["padding"],
			"border":props["border"],
			"width":props["width"],
			"height":props["height"],
			"text-align":props["horizon_align"],
			"overflow-x":props["overflow_x"],
			"overflow-y":props["overflow_y"],
			"-webkit-box-orient":props["box_orient"],
			"-moz-box-orient":props["box_orient"],
			"-webkit-box-flex":props["box_flex"],
			"-moz-box-flex":props["box_flex"],
		});
	}
}
