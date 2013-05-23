function ToolItem (name,url,props,advisory) {
	var _imgNode;
	
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
		get: function () {
			return _imgNode;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.click = function (handler,context) {
		if ($.isFunction(handler)) {
			_imgNode.click($.proxy(handler,context || _imgNode));
		}
	}
	
	Object.defineProperties(this, {
		click : {writable : false, enumerable : true, configurable : false,},
	});
	
	function init () {
		_imgNode = $("<img/>");
		_imgNode.addClass("nineToolImg");
		_imgNode.attr("name", name);
		_imgNode.attr("src",url);
		_imgNode.attr("title", advisory);
		_imgNode.css({
			"width":props["item_width"],
			"height":props["item_width"],
		});
		_imgNode.hover(
			function () {
				$(this).css("background-color",props["bgcolor:hover"]);
			},
			function () {
				$(this).css("background-color","transparent");
			}
		);
	}
}
