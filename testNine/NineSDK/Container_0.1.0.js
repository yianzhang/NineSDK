function Container (props) {
	this.items = {};
	this._props = props;
	
	this.node = this._divNode = $("<div/>");
	this._divNode.addClass("nineContainer");
	this._divNode.css({
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

Container.prototype.addContainer = function (name,props) {
	var container = new Container(props);
	this.items[name] = container;
	this._divNode.append(container.node);
	
	return container;
}

Container.prototype.addMenu = function (name,props) {
	var menuBar = new MenuBar(props);
	this.items[name] = menuBar;
	this._divNode.append(menuBar.node);
	
	return menuBar;
}
	
Container.prototype.addToolBar = function (name,props) {
	var toolBar = new ToolBar(props);
	this.items[name] = toolBar;
	this._divNode.append(toolBar.node);
	
	return toolBar;
}
	
Container.prototype.addTree = function (name,props) {
	var tree = new Tree(props);
	this.items[name] = tree;
	this._divNode.append(tree.node);
	
	return tree;
}

Container.prototype.addCallBoard = function (name,props) {
	var callBoard = new CallBoard(props);
	this.items[name] = callBoard;
	this._divNode.append(callBoard.node);
	
	return callBoard;
}
