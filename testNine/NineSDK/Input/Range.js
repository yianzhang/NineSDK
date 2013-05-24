Input.Range = function (name, args, props) {
	var _divNode, _rangeNode, _numberNode;
	
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
		return _rangeNode.val();
	};
	
	this.setValue = function (val) {		
		_rangeNode.val(val);
		_numberNode.val(val);
	};
	
	Object.defineProperties(this, {
		getValue : {writable : false, enumerable : true, configurable : false,},
		setValue : {writable : false, enumerable : true, configurable : false,},
	});
	
	function init() {
		_divNode = $("<div/>");
		_divNode.addClass("nineInputDiv");
		
		var _wrapNode = $("<div style='display:inline-block' />");
		
		var _rangeNode = $("<input type='range' />");
		_rangeNode.addClass("nineInputRange");
		_rangeNode.attr("name",name);
				
		var _numberNode = $("<input type='number'/>");
		_numberNode.addClass("nineInputNumber");
		_numberNode.css({
			"background-color":props["body_bgcolor"],
			"border":"1px solid "+props["body_font_color"],
			"color":props["body_font_color"],
			"font-size":props["body_font_size"],
			"font-family":props["body_font_family"],
			"font-weight":props["body_font_weight"],
		});
		
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
}
