Input.Radio = function (name, items, props) {
	var _divNode;
	
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
		
		for (var i=0;i<items.length;i++) if (typeof items[i] === "object"){
			var item = items[i];
			
			var _wrapNode = $("<div style='display:inline-block' />");
			
			var _radioNode = $("<input type='radio'/>");
			_radioNode.addClass("nineInputRadio");
			
			var _spanNode = $("<span/>");
			_spanNode.addClass("nineInputSpan");
			_spanNode.html(item["title"]+"&nbsp;&nbsp;");
			_spanNode.css({
				"color" : "font_color",
				"font-size" : "font_size",
				"font-family" : "font_family",
				"font-weight" : "font_weight",
			});
			
			_radioNode.attr("name",name);
			_radioNode.attr("value",item["value"]);
			_radioNode.prop("checked",item["checked"]);
			
			_wrapNode.append(_radioNode);
			_wrapNode.append(_spanNode);
			
			_divNode.append(_wrapNode);
			if (i<items.length-1 && 
				typeof item["linefeed"] === "boolean" && 
				item["linefeed"]
			) {
				_divNode.append($("<br/>"));
			}
		}
	}
	
	function getValue() {
		var value = {};
		_divNode.find("[name="+name+"]").val(function(i,v){
			if (this.checked) value = v;
			return v;
		});
		
		return value;
	}
	
	function setValue(val) {
		if (typeof val != "string") {
			return;
		}
		
		_divNode.find("[name="+name+"]").val(val);
	}
}
