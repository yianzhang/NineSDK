function ToolItem (url,props) {
	this._props = props;
	
	this.node = this._imgNode = $("<img/>");
	this._imgNode.attr("src",url);
	this._imgNode.addClass("nineToolImg");
	this._imgNode.css({
		"width":props["item_width"],
		"height":props["item_width"],
	});
	this._imgNode.hover(
		function () {
			$(this).css("background-color",props["bgcolor:hover"]);
		},
		function () {
			$(this).css("background-color","transparent");
		}
	);
}

ToolItem.prototype.click = function (handler,context) {
	if ($.isFunction(handler)) {
		this._imgNode.click($.proxy(handler,context || this._imgNode));
	}
}
