function Dialog (name,title,props) {
	var result = {};
	var items = {};
	var _divNode, _shadowNode, _tableNode;
	var _confirmNode, _closeNode;

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
	var _object = this;
	Object.defineProperty(this, "object", {
		get : function () {
			return _object;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.result
	Object.defineProperty(this, "result", {
		get : function () {
			return result;
		},
		enumerable : true,
		configurable : false,
	});
	
	this.itemAt = function (i) {
		return items[i];
	};
	
	this.setValue = setValue;
	
	this.show = show;
	
	this.close = function(handler,context) {		
		var self = this;
		if ($.isFunction(handler)) {
			_closeNode.click($.proxy(handler, context || self));
		}
	}
	
	this.confirm = function(handler, context) {
		var self = this;
		if ($.isFunction(handler)) {
			_confirmNode.click($.proxy(handler, context || self));
		}
	}
	
	this.addHeadline = function (title) {
		var _trNode = $("<tr/>");
		_trNode.addClass("nineDialogBodyTr");
		var _tdNode = $("<td colspan='2' />");
		_tdNode.addClass("nineDialogBodyHeadline");
		_tdNode.css({
			"font-size" : "120%",
			"font-weight" : "bolder",
		});
			
		_tdNode.text(title);
		
		_trNode.append(_tdNode);
		_tableNode.append(_trNode);
	}
	
	this.addCheckbox = function (name, label) {		
		var _items = [].slice.call(arguments,2);
		var checkbox = new Input.Checkbox(name, _items, {});
		items[name] = checkbox;
		
		var _tdNode1 = earlywork(label);
		_tdNode1.append(checkbox.node);
	}
	
	this.addRadio = function (name, label) {		
		var _items = [].slice.call(arguments,2);
		var _props = {};
		var radio = new Input.Radio(name, _items, {});
		items[name] = radio;
		
		var _tdNode1 = earlywork(label);
		_tdNode1.append(radio.node);
	}
	
	this.addText = function (name, label) {
		var args = arguments[2];
		var text = new Input.Text(name, args || {}, {
			"bgcolor" : "inherit",
			"border" : "1px solid " + props["body_font_color"],
			"font_color" : "inherit",
			"font_size" : "inherit",
			"font_family" : "inherit",
			"font_weight" : "inherit",
		});
		items[name] = text;
		
		var _tdNode1 = earlywork(label);
		_tdNode1.append(text.node);
	}
	
	this.addPassword = function (name, label) {
		var args = arguments[2];
		var password = new Input.Password(name, args || {}, {
			"bgcolor" : "inherit",
			"border" : "1px solid " + props["body_font_color"],
			"font_color" : "inherit",
			"font_size" : "inherit",
			"font_family" : "inherit",
			"font_weight" : "inherit",
		});
		items[name] = password;
		
		var _tdNode1 = earlywork(label);
		_tdNode1.append(password.node);
	}

	this.addRange = function (name, label) {
		var args = arguments[2];
		var range = new Input.Range(name, args || {}, {
			"bgcolor" : "inherit",
			"border" : "1px solid " + props["body_font_color"],
			"font_color" : "inherit",
			"font_size" : "inherit",
			"font_family" : "inherit",
			"font_weight" : "inherit",
		});
		items[name] = range;
		
		var _tdNode1 = earlywork(label);
		_tdNode1.append(range.node);
	}
	
	this.addColor = function (name, label) {
		var args = arguments[2];
		var color = new Input.Color(name, args, {
			"bgcolor" : "inherit",
			"border" : "1px solid " + props["body_font_color"],
			"font_color" : "inherit",
			"font_size" : "inherit",
			"font_family" : "inherit",
			"font_weight" : "inherit",
		});
		items[name] = color;
		
		var _tdNode1 = earlywork(label);
		_tdNode1.append(color.node);
	}
	
	this.addSelect = function (name, label) {
		var args = [].slice.call(arguments,2);
		var select = new Input.Select(name, args, {
			"bgcolor" : props["body_bgcolor"],
			"border" : "1px solid " + props["body_font_color"],
			"font_color" : "inherit",
			"font_size" : "inherit",
			"font_family" : "inherit",
			"font_weight" : "inherit",
		});
		items[name] = select;
		
		var _tdNode1 = earlywork(label);
		_tdNode1.append(select.node);
	}
	
	this.addTextarea = function (name, label) {
		var args = arguments[2];
		var textarea = new Input.Textarea(name, args, {
			"bgcolor" : "inherit",
			"border" : "1px solid " + props["body_font_color"],
			"font_color" : "inherit",
			"font_size" : "inherit",
			"font_family" : "inherit",
			"font_weight" : "inherit",
		});
		items[name] = textarea;
		
		var _tdNode1 = earlywork(label);
		_tdNode1.append(textarea.node);
	}
	
	Object.defineProperties(this, {
		itemAt : {writable : false, enumerable : true, configurable : false},
		show : {writable : false, enumerable : true, configurable : false},
		close : {writable : false, enumerable : true, configurable : false},
		confirm : {writable : false, enumerable : true, configurable : false},
		setValue : {writable : false, enumerable : true, configurable : false},
		addHeadline : {writable : false, enumerable : true, configurable : false},
		addCheckbox : {writable : false, enumerable : true, configurable : false},
		addRadio : {writable : false, enumerable : true, configurable : false},
		addText : {writable : false, enumerable : true, configurable : false},
		addPassword : {writable : false, enumerable : true, configurable : false},
		addRange : {writable : false, enumerable : true, configurable : false},
		addColor : {writable : false, enumerable : true, configurable : false},
		addSelect : {writable : false, enumerable : true, configurable : false},
		addTextarea : {writable : false, enumerable : true, configurable : false},
	});
	
	function init() {
		_shadowNode = $("<div/>");
		_shadowNode.addClass("nineDialogShadow");
		
		_divNode = $("<div/>");
		_divNode.addClass("nineDialog");
		_divNode.css({
			"border":props["border"],
			"max-width":$(window).width()*0.7,
			"min-width":"300px",
			"max-height":$(window).height()*0.8,
		});
		
		var _headNode = $("<div/>");
		_headNode.addClass("nineDialogHead");
		_headNode.css({
			"background-color":props["head_bgcolor"],
			"padding":props["head_padding"],
			"border":props["head_border"],
			"color":props["head_font_color"],
			"font-size":props["head_font_size"],
			"font-weight":props["head_font_weight"],
			"font-family":props["head_font_family"],
		});
		
		var _titleNode = $("<span/>");
		_titleNode.text(title);
		_titleNode.addClass("nineDialogTitle");
		_titleNode.css({
	
		});
		
		_confirmNode = $("<span/>");
		_confirmNode.text("✔");
		_confirmNode.attr("title","Confirm");
		_confirmNode.addClass("nineDialogConfirm");
		_confirmNode.css({
			
		});
		_confirmNode.hover(
			function () {
				$(this).css({
					"background-color":"blue",
					"color":"white",
				});
			},
			function () {
				$(this).css({
					"background-color":"transparent",
					"color":props["head_font_color"],
				});
			}
		);
		_confirmNode.click(confirm);
		
		_closeNode = $("<span/>");
		_closeNode.text("✖");
		_closeNode.attr("title","Close");
		_closeNode.addClass("nineDialogClose");
		_closeNode.css({
			
		});
		_closeNode.hover(
			function () {
				$(this).css({
					"background-color":"red",
					"color":"white",
				});
			},
			function () {
				$(this).css({
					"background-color":"transparent",
					"color":props["head_font_color"],
				})
			}
		);
		_closeNode.click(close);
		
		var _bodyNode = $("<div/>");
		_bodyNode.addClass("nineDialogBody");
		_bodyNode.css({
			"background-color":props["body_bgcolor"],
			"padding":props["body_padding"],
			"border":props["body_border"],
			"max-width":$(window).width()*0.7,
			"min-width":"300px",
			"max-height":$(window).height()*0.75,
			"width":props["body_width"],
			"height":props["body_height"],
			"color":props["body_font_color"],
			"font-size":props["body_font_size"],
			"font-family":props["body_font_family"],
			"font-weight":props["body_font_weight"],
		});
		
		_tableNode = $("<table/>");
		_tableNode.addClass("nineDialogBodyTable");
		_tableNode.css({
			
		});
		
		_headNode.append(_titleNode);
		_headNode.append(_closeNode);
		_headNode.append(_confirmNode);
		_bodyNode.append(_tableNode);
		_divNode.append(_headNode);
		_divNode.append(_bodyNode);
	}
	
	function show(val) {
		setValue(val || {});
		
		_shadowNode.css({
			"width":document.documentElement.scrollWidth,
			"height":document.documentElement.scrollHeight,
		});
		$(document.body).append(_shadowNode);
	
		$(document.body).append(_divNode);
		_divNode.css({
			"left":($(window).width()-_divNode.outerWidth())/2+$(document).scrollLeft(),
			"top":($(window).height()-_divNode.outerHeight())/2+$(document).scrollTop(),
		});
	}
	
	function close() {
		for (var i in items) {
			items[i].value = result[i];
		}
			
		$(document.body).children(".nineDialogShadow").eq(0).detach();
		$(document.body).children('.nineDialog').eq(0).detach();
	}
	
	function confirm() {
		for (var i in items) {
			result[i] = items[i].value;
		}
		
		$(document.body).children(".nineDialogShadow").eq(0).detach();
		$(document.body).children('.nineDialog').eq(0).detach();
	}
	
	function setValue(val) {
		for (var i in val) {
			if (items[i]) {
				items[i].value = val[i];
				result[i] = items[i].value;
			}
		}
	}
	
	function earlywork (label) {
		var _trNode = $("<tr/>");
		_trNode.addClass("nineDialogBodyTr");
		var _tdNode0 = $("<td/>");
		_tdNode0.addClass("nineDialogBodyTd0");
		var _tdNode1 = $("<td/>");
		_tdNode1.addClass("nineDialogBodyTd1");
		_trNode.append(_tdNode0);
		_trNode.append(_tdNode1);
		_tableNode.append(_trNode);
			
		var _labelNode = $("<label/>");
		_labelNode.addClass("nineDialogBodyLabel");
		_labelNode.text(label);
		_tdNode0.append(_labelNode);
		
		return _tdNode1;
	}
}
