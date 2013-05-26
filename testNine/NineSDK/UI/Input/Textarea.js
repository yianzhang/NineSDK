Input.Textarea = function (name, args, props) {
	var _divNode, _textareaNode;
	
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
		
		_textareaNode = $("<textarea/>");
		_textareaNode.addClass("nineInputTextarea");
		_textareaNode.css({
			"background-color":props["bgcolor"],
			"border":props["border"],
			"color":props["font_color"],
			"font-size":props["font_size"],
			"font-family":props["font_family"],
			"font-weight":props["font_weight"],
		});
		
		_textareaNode.attr("name",name);
		_textareaNode.val(args["value"]);
		_textareaNode.attr("placeholder",args["placeholder"]);
		_textareaNode.css({
			"width":args["width"],
			"height":args["height"],
		});
		
		_divNode.append(_textareaNode);
	}
	
	function getValue() {		
		return _textareaNode.val();
	}
	
	function setValue(val) {
		if (val == undefined) return;
		
		_textareaNode.val(val);
	}
}
		