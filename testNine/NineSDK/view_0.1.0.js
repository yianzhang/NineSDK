var view = {
	addMenu : function (node,props) {
		var menuBar = new MenuBar(props);
		$(node).append(menuBar.node);
		
		return menuBar;
	},
	
	addToolBar : function (node,props) {
		var toolBar = new ToolBar(props);
		$(node).append(toolBar.node);
		
		return toolBar;
	},
	
	addTree : function (node,props) {
		var tree = new Tree(props);
		$(node).append(tree.node);
		
		return tree;
	},
}
