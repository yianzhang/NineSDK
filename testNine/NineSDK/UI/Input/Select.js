Input.Select = function (name, args, props) {
	var _divNode, _selectNode;
	
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
		_divNode = $("<div/>")
		_divNode.addClass("nineInputDiv");
		
		_selectNode = $("<select/>");
		_selectNode.addClass("nineInputSelect");
		_selectNode.css({
			"background-color":props["bgcolor"],
			"border":props["border"],
			"color":props["font_color"],
			"font-size":props["font_size"],
			"font-family":props["font_family"],
			"font-weight":props["font_weight"],
		});
		
		_selectNode.attr("name",name);
		
		for (var i=0;i<args.length;i++) if (typeof args[i] === "object"){		
			var _optionNode = $("<option/>");
			_optionNode.val(args[i]["value"]);
			_optionNode.text(args[i]["title"]);
			
			_selectNode.append(_optionNode);
			
			if (typeof args[i]["selected"] === "boolean" &&
				args[i]["selected"]
			) {
				_selectNode.val(args[i]["value"]);
			}
		}
	
		_divNode.append(_selectNode);
	}
	
	function getValue() {		
		return _selectNode.val();
	}
	
	function setValue(val) {
		if (val == undefined) return;
			
		_selectNode.val(val);
	}
}
