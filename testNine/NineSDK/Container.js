function Container (name,props) {
	var items = {};
	var _divNode;

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
			return _divNode[0];
		},
		enumerable : true,
		configurable : false,
	});
	
	//node.object
	var self = this;
	Object.defineProperty(_divNode[0], "object", {
		get : function () {
			return self;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.addContainer = function (name,props) {
		var container = new Container(name,props);
		items[name] = container;
		_divNode.append(container.node);
		
		return container;
	}
	
	this.addMenu = function (name,props) {
		var menuBar = new MenuBar(name,props);
		items[name] = menuBar;
		_divNode.append(menuBar.node);
		
		return menuBar;
	}
		
	this.addToolBar = function (name,props) {
		var toolBar = new ToolBar(name,props);
		items[name] = toolBar;
		_divNode.append(toolBar.node);
		
		return toolBar;
	}
		
	this.addTree = function (name,props) {
		var tree = new Tree(name,props);
		items[name] = tree;
		_divNode.append(tree.node);
		
		return tree;
	}
	
	this.addCanvas = function (name, props) {
		var canvas = new Canvas(name, props);
		items[name] = canvas;
		_divNode.append(canvas.node);
		
		return canvas;
	};
	
	this.addCallBoard = function (name,props) {
		var callBoard = new CallBoard(name,props);
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
