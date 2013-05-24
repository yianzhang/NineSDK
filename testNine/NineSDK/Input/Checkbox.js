Input.Checkbox = function (name, items, props) {
	var _divNode;
	
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
		var value = {};
		_divNode.find("[name="+name+"]").val(function(i,v){
			value[v] = this.checked;
			return v;
		});
		
		return value;
	};
	
	this.setValue = function (val) {
		if (typeof val != "object") {
			return;
		}
		
		_divNode.find("[name="+name+"]").val(function(i,v){
			$(this).prop("checked",val[v]);
			return v;
		});
	};
	
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
			_checkboxNode.attr("name",name);
			_checkboxNode.attr("value",item["value"]);
			_checkboxNode.prop("checked",item["checked"]);
			
			var _spanNode = $("<span/>");
			_spanNode.addClass("nineInputSpan");
			_spanNode.html(item["title"]+"&nbsp;&nbsp;");
			
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
}
