Input.Text = function (name, args, props) {
	var _divNode, _textNode;
	
	init();
	
	//this.node
	Object.defineProperty(this, "node", {
		get : function () {
			return _divNode[0];
		},
		enumerable : true,
		configurable : false,
	});
	
	//node.object
	var object = this;
	Object.defineProperty(_divNode[0], "object", {
		get : function () {
			return object;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.getValue = function () {		
		return _textNode.val();
	};
	
	this.setValue = function (val) {		
		_textNode.val(val);
	};
	
	Object.defineProperties(this, {
		getValue : {writable : false, enumerable : true, configurable : false,},
		setValue : {writable : false, enumerable : true, configurable : false,},
	});
	
	function init() {
		_divNode = $("<div/>");
		_divNode.addClass("nineInputDiv");
		
		_textNode = $("<input type='text' />");
		_textNode.addClass("nineInputText");
		_textNode.attr("name",name);
		_textNode.css({
			"background-color":props["body_bgcolor"],
			"border":"1px solid "+props["body_font_color"],
			"color":props["body_font_color"],
			"font-size":props["body_font_size"],
			"font-family":props["body_font_family"],
			"font-weight":props["body_font_weight"],
		});

		_textNode.attr("value",args["value"]);
		_textNode.attr("placeholder",args["placeholder"]);
		_textNode.attr("maxlength",args["maxlength"]);
		_textNode.css("width",args["width"]);

		_divNode.append(_textNode);
	}
}
