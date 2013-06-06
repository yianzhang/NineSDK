Input.Color = function (name, args, props) {
	var _divNode, _colorNode, _spanNode;
	
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
		
		var _wrapNode = $("<div style='display:inline-block' />");
		
		_colorNode = $("<input type='color' />");
		_colorNode.addClass("nineInputColor");
		
		_spanNode = $("<input type='text' size='7em' maxlength=7 />");
		_spanNode.addClass("nineInputSpan");
		_spanNode.css({
			"background-color":props["bgcolor"],
			"border":props["border"],
			"color":props["font_color"],
			"font-size":props["font_size"],
			"font-family":props["font_family"],
			"font-weight":props["font_weight"],
		});
		
		_colorNode.attr("name",name);
		_colorNode.val(args["value"]);	
		_spanNode.val(_colorNode.val());
		
		_spanNode.change(function() {
			var val = _spanNode.val();
			if (/#[0-9a-f]{6}/.test(val))
				_colorNode.val(_spanNode.val());
			else
				_spanNode.val(_colorNode.val());
		});
		_colorNode.change(function(){
			_spanNode.val(_colorNode.val());
		});
		
		_wrapNode.append(_colorNode);
		_wrapNode.append(_spanNode);
		_divNode.append(_wrapNode);
	}
	
	function getValue() {		
		return _colorNode.val();
	}
	
	function setValue(val) {
		if (val == undefined) return;
			
		_colorNode.val(val);
		_spanNode.val(val);
	}
}
