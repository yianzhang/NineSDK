function ToolItem (url) {
	this.node  = this._tdNode = $("<td/>");
	this._tdNode.addClass("toolItem");
	this._tdNode.attr("align","center");
	
	this._aNode = $("<a/>");
	this._aNode.attr("href","#");
	
	this._imgNode = $("<img/>");
	this._imgNode.attr("src",url);
	
	this._tdNode.append(this._aNode);
	this._aNode.append(this._imgNode);
}

