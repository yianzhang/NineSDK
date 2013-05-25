function Canvas (name,props) {
	var _canvasNode;
	
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
			return _canvasNode[0];
		},
		enumerable : true,
		configurable : false,
	});
	
	//node.object
	var self = this;
	Object.defineProperty(_canvasNode[0], "object", {
		get : function () {
			return self;
		},
		enumerable : true,
		configurable : false,
	});
	
	function init() {
		_canvasNode = $("<canvas/>");
		_canvasNode.html("Your browser don't support CANVAS!");
		_canvasNode.addClass("nineCanvas");
		_canvasNode.css({
			"padding" : props["padding"],
			"margin" : props["margin"],
			"border" : props["border"],
			"-webkit-box-flex" : props["box_flex"],
			"-moz-box-flex" : props["box_flex"],
			"width" : props["width"],
			"height" : props["height"],
		});
	}
}
