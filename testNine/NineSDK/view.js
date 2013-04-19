var view = {
	container : {},
	init : function () {
		this.container = new Container({
			"box_orient":"vertical",
			"width":"100%",
			"height":$(window).height(),
		});
		$(document.body).append(this.container.node);
	},
	
	addDialog : function(title,props) {
		return new Dialog(title,props);
	},
};

$(window).resize(function () {
	view.container.node.css({
		"height":window.innerHeight,
	});
});