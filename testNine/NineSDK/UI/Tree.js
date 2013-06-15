function Tree(name,props) {
	var self = this;
	
	var items = {};
//	var count = 0;
	var data = undefined;
	var sltItem = undefined;
	var _divNode, _ulNode;
	
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

	//this.data
	Object.defineProperty(this, "data", {
		get : function () {
			return data;
		},
		enumerable : true,
		configurable : false,
	});
		
	this.addItem = function (name,title,data) {
		var item = new TreeItem(name,title,this,1,props,data || {});
		
		items[name] = item;
//		count++;
		_ulNode.append(item.node);
		
		return item;
	};
	
	this.deleteItem = function(name) {
		if (items[name]) {
			$(items[name].node).remove();
			delete items[name];
//			--count;
			return true;
		}
		return false;
	};
	
	this.filterCheckedItems = function () {
		return [].map.call(_divNode.find("input:checked").parent(),function(x) {return x.object;});
/*		
		var result = [];
		
		for (var i in items) {
			$.merge(result,items[i].filterCheckedItems());
		}
		
		return result;
*/
	};
	
	this.deleteCheckedItems = function () {
		var tmp = this.filterCheckedItems(true);
		for (var i=0;i<tmp.length;++i) {
			if (tmp[i] = sltItem) {
				sltItem = undefined;
				break;
			}
		}
		
		var tmp = this.filterCheckedItems(false);
		for (var i=0;i<tmp.length;i++) {
			if (tmp[i]) {
				tmp[i].del();
			}
		}
	};
	
	this.change = function (handler,context) {
		var self = this;
		if ($.isFunction(handler)) {
			_divNode.on("change", "input:checkbox" ,$.proxy(handler, context || self));
		}
	}; 
	
	this.itemAt = function (i) {
		return items[i];
	};
/*
	//this.items
	Object.defineProperty(this, "items", {
		get : function () {
			return items;
		},
		enumerable : true,
		configurable : false,
	});
*/	
	//this.selectedItem
	Object.defineProperty(this, "selectedItem", {
		get : function () {
			return sltItem;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.empty = function () {
		_ulNode.empty();
		items = {};
//		count = 0;
		data = undefined;
		sltItem = undefined;
	};
	
	this.genFromAllBody = function (ab) {
		if (!ab || !(ab instanceof AllBody)) return;
		
		this.empty();
		data = ab;
		for (var i=0;i<ab.bodyLength;++i) {
			var body = ab.bodyAt(i);
			var item0 = this.addItem("Body_"+i, "Body_"+i, body);
			for (var j=0;j<body.faceLength;++j) {
				var face = body.faceAt(j);
				var item1 = item0.addItem("Face_"+j, "Face_"+j, face);
				for (var k=0;k<face.loopLength;++k) {
					var loop = face.loopAt(k);
					var item2 = item1.addItem("Loop_"+k, "Loop_"+k, loop);
					for (var l=0;l<loop.polylineLength;++l) {
						var polyline = loop.polylineAt(l);
						var item3 = item2.addItem("Polyline_"+l, "Polyline_"+l, polyline);
					}
				}
			}
		}
	};
	
	this.genFromAllSolid = function (as) {
		if (!as || !(as instanceof AllSolid)) return;
		
		this.empty();
		data = as;
		for (var i=0;i<as.solidLength;++i) {
			var solid = as.solidAt(i);
			var item0 = this.addItem("Solid_"+i, "Solid_"+i, solid);
		}
	};
	
	Object.defineProperties(this, {
		addItem : {writable : false, enumerable : true, configurable : false,},
		filterCheckedItems : {writable : false, enumerable : true, configurable : false,},
		deleteCheckedItems : {writable : false, enumerable : true, configurable : false,},
		change : {writable : false, enumerable : true, configurable : false,},
		itemAt : {writable : false, enumerable : true, configurable : false,},
		empty : {writable : false, enumerable : true, configurable : false,},
		genFromAllBody : {writable : false, enumerable : true, configurable : false,},
		genFromAllSolid : {writable : false, enumerable : true, configurable : false,},
	});

	function init() {
		_divNode = $("<div/>");
		_divNode.addClass("nineTreeDiv");
		_divNode.css({
			"background-color":props["bgcolor"],
			"width":props["width"],
			"height":props["height"],
			"padding":props["padding"],
			"margin":props["margin"],
			"border":props["border"],
			"-webkit-box-flex":props["box_flex"],
			"-moz-box-flex":props["box_flex"],
		});
		
		_ulNode = $("<ul/>");
		_ulNode.addClass("nineTreeUl");
		
		_divNode.append(_ulNode);
		
		_divNode.on("click","span.nineTreeItemText",function() {
/*			var list = $(this).parentsUntil("div","li");
			list = [].reverse.apply(list);
						
			var item = self;
			for (var i=0;i<list.length;i++) {
				for (var j in item.items) {
					if (item.items[j].name == $(list[i]).children("span:last").text()) {
						item = item.items[j];
						break;
					}
				}
			}
*/
			var item = $(this).parent()[0].object;		
			if (sltItem == item) {
				$(item.node).children("span.nineTreeItemText").css({
					"background-color":"transparent",
					"color":props["font_color"],
				});
				
				sltItem = undefined;
			} else {
				_divNode.find("span.nineTreeItemText").css({
					"background-color":"transparent",
					"color":props["font_color"],
				});
				
				$(item.node).children("span.nineTreeItemText").css({
					"background-color":props["bgcolor:selected"],
					"color":props["font_color:selected"],
				});
				
				sltItem = item;
			}
		});
		
//		change(function(){});
		change();
	}
	
	function change () {
/*		
		var self = this;
		_divNode.on("change","input:checkbox",function () {
			var _ulNode = $(this).nextAll("ul");
			var _liNode = $(this).parent();
			
			if (this.checked) {
				$(_ulNode).find("input:checkbox").prop("checked",true);
				$(_liNode).parents().children("input:checkbox").prop("checked",function () {
					var tmp = $(this).parent().children("ul").children("li");
					if (tmp.children("input:checkbox").length === tmp.children("input:checked").length)
						return true;
					else
						return false;
				});
			} else {
				$(_ulNode).find("input:checked").prop("checked",false);
				$(_liNode).parents().children("input:checked").prop("checked",false);
			}
			
			if ($.isFunction(handler)) {
				($.proxy(handler,context || sltItem || $(this).parent()))();
			}
		});
*/

		_divNode.on("change", "input:checkbox", function () {
			var _ulNode = $(this).nextAll("ul");
			var _liNode = $(this).parent();
			
			if (this.checked) {
				$(_ulNode).find("input:checkbox").prop("checked",true);
				$(_liNode).parents().children("input:checkbox").prop("checked",true);
			} else {
				$(_ulNode).find("input:checked").prop("checked",false);
				$(_liNode).parents().children("input:checkbox").prop("checked",function () {
					var tmp = $(this).parent().children("ul").children("li");
					if (tmp.children("input:checked").length == 0)
						return false;
					else
						return true;
				});
			}
		});
	}
}
