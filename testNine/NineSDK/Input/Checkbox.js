Input.Checkbox = function (name, items, props) {
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
	
	//Object.value
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
			
			var _checkboxNode = $("<input type='checkbox'/>");
			_checkboxNode.addClass("nineInputCheckbox");
			
			var _spanNode = $("<span/>");
			_spanNode.addClass("nineInputSpan");
			_spanNode.html(item["title"]+"&nbsp;&nbsp;");
			_spanNode.css({
				"color" : "font_color",
				"font-size" : "font_size",
				"font-family" : "font_family",
				"font-weight" : "font_weight",
			});
			
			_checkboxNode.attr("name",name);
			_checkboxNode.attr("value",item["value"]);
			_checkboxNode.prop("checked",item["checked"]);
			
			_wrapNode.append(_checkboxNode);
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
			value[v] = this.checked;
			return v;
		});
		
		return value;
	}
	
	function setValue(val) {
		if (typeof val != "object") {
			return;
		}
		
		_divNode.find("[name="+name+"]").val(function(i,v){
			$(this).prop("checked",val[v]);
			return v;
		});
	}
}
