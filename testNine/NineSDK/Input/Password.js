Input.Password = function (name, args, props) {
	var _divNode, _passwordNode;
	
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
		
		_passwordNode = $("<input type='password' />");
		_passwordNode.addClass("nineInputPassword");
		_passwordNode.css({
			"background-color":props["bgcolor"],
			"border":props["border"],
			"color":props["font_color"],
			"font-size":props["font_size"],
			"font-family":props["font_family"],
			"font-weight":props["font_weight"],
		});

		_passwordNode.attr("name",name);
		_passwordNode.attr("value",args["value"]);
		_passwordNode.attr("placeholder",args["placeholder"]);
		_passwordNode.attr("maxlength",args["maxlength"]);
		_passwordNode.css("width",args["width"]);

		_divNode.append(_passwordNode);
	}
	
	function getValue() {		
		return _passwordNode.val();
	}
	
	function setValue(val) {		
		_passwordNode.val(val);
	}
}
