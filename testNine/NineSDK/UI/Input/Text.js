Input.Text = function (name, args, props) {
	var _divNode, _textNode;
	
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
	var _object = this;
	Object.defineProperty(_divNode[0], "object", {
		get : function () {
			return _object;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.value
	Object.defineProperty(this, "value", {
		get : getValue,
		set : setValue,
		enumerable : true,
		configurable : false,
	});
	
	this.getValue = getValue;
	
	this.setValue = setValue;
	
	Object.defineProperties(this, {
		getValue : {writable : false, enumerable : true, configurable : false,},
		setValue : {writable : false, enumerable : true, configurable : false,},
	});
	
	function init() {
		_divNode = $("<div/>");
		_divNode.addClass("nineInputDiv");
		
		_textNode = $("<input type='text' />");
		_textNode.addClass("nineInputText");
		_textNode.css({
			"background-color":props["bgcolor"],
			"border":props["border"],
			"color":props["font_color"],
			"font-size":props["font_size"],
			"font-family":props["font_family"],
			"font-weight":props["font_weight"],
		});
		
		_textNode.attr("name",name);
		_textNode.attr("value",args["value"]);
		_textNode.attr("placeholder",args["placeholder"]);
		_textNode.attr("maxlength",args["maxlength"]);
		_textNode.css("width",args["width"]);

		_divNode.append(_textNode);
	}
	
	function getValue() {		
		return _textNode.val();
	}
	
	function setValue(val) {		
		_textNode.val(val);
	}
}
