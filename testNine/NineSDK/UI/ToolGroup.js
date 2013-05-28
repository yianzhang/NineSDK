function ToolGroup (name,props, advisory) {
	var items = {};
	var status = undefined;
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
	var self = this;
	Object.defineProperty(_divNode[0], "object", {
		get : function () {
			return self;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.status
	Object.defineProperty(this, "status", {
		get : function () {
			return status;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.addItem = function (name, url, _advisory) {
		var item = new ToolGroupItem(name, url, this, props, (advisory?advisory+" : ":"")+_advisory);
		items[name] = item;
		
		_divNode.append(item.node);
		
		return item;
	};
	
	this.itemAt = function (i) {
		return items[i];
	};
	
	this.click = function (handler,context) {
		var self = this;
		if ($.isFunction(handler)) {
			_divNode.click($.proxy(handler,context || self));
		}
	} 
	
	Object.defineProperties(this, {
		addItem : {writable : false, enumerable : true, configurable : false},
		itemAt : {writable : false, enumerable : true, configurable : false},
		click : {writable : false, enumerable : true, configurable : false},
	});
	
	function init () {
		_divNode = $("<div/>");
		_divNode.addClass("nineToolGroup");
		_divNode.css({
			
		});
		
		_divNode.on("click", "img.nineToolGroupImg", function () {
			var target = this.name;
			if (status == undefined) {
				$(this).css("background-color",props["bgcolor:selected"]);
				status = target;
			} else if (status == target) {
				$(this).css("background-color","transparent");
				status = undefined;
			} else {
				$(items[status].node).css("background-color","transparent");
				$(this).css("background-color",props["bgcolor:selected"]);
				status = target;
			}
		});
	}
}
