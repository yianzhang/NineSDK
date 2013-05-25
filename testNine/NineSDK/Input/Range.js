Input.Range = function (name, args, props) {
	var _divNode, _rangeNode, _numberNode;
	
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
		
		_rangeNode = $("<input type='range' />");
		_rangeNode.addClass("nineInputRange");
				
		_numberNode = $("<input type='number'/>");
		_numberNode.addClass("nineInputNumber");
		_numberNode.css({
			"background-color":props["bgcolor"],
			"border":props["border"],
			"color":props["font_color"],
			"font-size":props["font_size"],
			"font-family":props["font_family"],
			"font-weight":props["font_weight"],
		});
		
		_rangeNode.attr("name",name);
		_rangeNode.attr("min",args["min"]);
		_rangeNode.attr("max",args["max"]);
		_rangeNode.attr("step",args["step"]);
		_rangeNode.css("width",args["size"]);
		_rangeNode.val(args["value"]);
		
		_numberNode.attr("min",args["min"]);
		_numberNode.attr("max",args["max"]);
		_numberNode.attr("step",args["step"]);
		_numberNode.val(_rangeNode.val());
		
		_numberNode.change(function() {
			_rangeNode.val(_numberNode.val());
		});
		_rangeNode.change(function(){
			_numberNode.val(_rangeNode.val());
		});
		
		_wrapNode.append(_rangeNode);
		_wrapNode.append(_numberNode);
		
		_divNode.append(_wrapNode);
	}
	
	function getValue() {		
		return _rangeNode.val();
	}
	
	function setValue(val) {		
		_rangeNode.val(val);
		_numberNode.val(val);
	}
}
