function MenuItem(name,title,lev,props) {
	var items = {};
	var _liNode, _ulNode;
	
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
			return _liNode[0];
		},
		enumerable : true,
		configurable : false,
	});
	
	//node.object
	var self = this;
	Object.defineProperty(_liNode[0], "object", {
		get : function () {
			return self;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.addItem = function (name,title) {
		var item = new MenuItem(name,title,lev+1,props);
		items[name] = item;
		
		_ulNode.append(item.node);
		
		return item;
	}
	
	this.click = function (handler,context) {
		var self = this;
		if ($.isFunction(handler)) {
			_liNode.click($.proxy(handler, context || self));
		}
	}
	
	this.itemAt = function (i) {
		return items[i];
	}
	
	Object.defineProperties(this, {
		addItem : {writable : false, enumerable : true, configurable : false,},
		click : {writable : false, enumerable : true, configurable : false,},
		itemAt : {writable : false, enumerable : true, configurable : false,},
	});
	
	function init () {	
		_liNode = $("<li/>");
		_liNode.addClass("nineMenuItem"+(lev>1?2:lev));
		_liNode.html((lev>0?"&nbsp;&nbsp;":"")+title+(lev>0?"&nbsp;&nbsp;":""));
		_liNode.css({
			"background-color":props["bgcolor"],
			"min-width":props["item_width"],
			"height":props["item_height"],
			"line-height":props["item_height"],
			"color":props["font_color"],
			"font-size":props["font"+(lev>0?"1":"0")+"_size"],
			"font-family":props["font"+(lev>0?"1":"0")+"_family"],
			"font-weight":props["font"+(lev>0?"1":"0")+"_weight"],
		});
		_liNode.hover(
			function () {
				$(this).css("background-color",props["bgcolor:hover"]);
				if (lev>0) {
					_ulNode.css({
						"left":_liNode.width(),
					});
				}
			},
			function () {
				$(this).css("background-color",props["bgcolor"]);
			}
		);

		_ulNode = $("<ul/>");
		_ulNode.addClass("nineMenuList"+(lev>0?2:1));

		_liNode.append(_ulNode);
	}
}
