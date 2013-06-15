var view = {};

(function(){
	var vc;
	var dlgs = {};
	
	Object.defineProperty(view, "container", {
		get : function () {
			if (vc) return vc;
			
			vc = new Container("rootContainer", "vertical", {
				"width":"100%",
				"height":$(window).height(),
			});
			
			$(document.body).append(view.container.node);
			
			return vc;
		},
		enumerable : true,
		configurable : false,
	});
	
	view.dialogAt = function(i) {
		return dlgs[i];
	};
	
	view.addDialog = function(name,title,props) {
		var dlg = new Dialog(name,title,props);
		dlgs[name] = dlg;
		
		return dlg;
	}
	
	view.resize = function (handler) {		
		$(window).resize(function() {
			$(view.container.node).css({
				"height":window.innerHeight,
			});
			(handler)();
		});
	}
	
	Object.defineProperties(view, {
		dialog : {writable : false, enumerable : true, configurable : false,},
		addDialog : {writable : false, enumerable : true, configurable : false,},
		resize : {writable : false, enumerable : true, configurable : false,},
	});
})();
