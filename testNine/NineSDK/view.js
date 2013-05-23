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
	
	addDialog : function(name,props) {
		return new Dialog(name,props);
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
