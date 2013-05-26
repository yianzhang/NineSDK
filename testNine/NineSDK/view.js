var view = {
	container : {},
	init : function () {
		this.container = new Container("rootContainer",{
			"box_orient":"vertical",
			"width":"100%",
			"height":$(window).height(),
		});
		$(document.body).append(this.container.node);
	},
	
	addDialog : function(name,title,props) {
		return new Dialog(name,title,props);
	},
	
	resize : function (handler) {
		$(window).resize(handler);
	},
};

$(window).resize(function () {
	view.container.node.css({
		"height":window.innerHeight,
	});
});
