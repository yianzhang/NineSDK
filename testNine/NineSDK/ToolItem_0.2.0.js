function ToolItem (url,props) {
	this._props = props;
	
	this.node = this._aNode = $("<a/>");
	this._aNode.attr("href","#");
	this._aNode.addClass("nineToolA");
	
	this._imgNode = $("<img/>");
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
	
	this._aNode.append(this._imgNode);
}

