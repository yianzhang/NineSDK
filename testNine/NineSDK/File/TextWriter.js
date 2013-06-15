function TextWriter() {
	var text = "";
	var handler = function(){};
	var context = undefined;

	//this.trigger
	Object.defineProperty(this, "trigger", {
		get : function () {
			var self = this;
			return function(){
				if (($.proxy(handler,context || self))() == -1) return;
				self.saveAs("download.txt");
			};
		},
		enumerable : true,
		configurable : false,
	});
	
	this.write = function (_text) {
		text += _text;
	}
	
	this.writeln = function (_text) {
		this.write(_text);
		text += '\n';
	}
	
	this.writing = function (_handler,_context) {
		handler = _handler;
		context = _context;
	}
	
	this.saveAs = function (name){
		window.Blob = window.Blob || window.WebKitBlob || window.MozBlob;
		window.URL = window.URL || window.WebKitURL || window.MozURL;
		navigator.saveBlob = navigator.saveBlob || navigator.webkitSaveBlob || navigator.mozSaveBlob;
	
		var blob = new Blob([text],{type:"text/plain;charset=UTF-8"});
		name = name || "download.txt";
	
		if (navigator.saveBlob) {
			navigator.saveBlob(blob, name);
		}
	
		else if (window.URL) {
			var url = URL.createObjectURL(blob);
	
			var link = $("<a style='display:none'/>");
			link.attr("href",url);
			link.attr("download",name);
			
			var event = document.createEvent('MouseEvents');
			event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
			
			link[0].dispatchEvent(event);
	
//			URL.revokeObjectURL(url);
		}
	}

	Object.defineProperties(this, {
		write : {writable : false, enumerable : true, configurable : false,},
		writeln : {writable : false, enumerable : true, configurable : false,},
		writing : {writable : false, enumerable : true, configurable : false,},
		saveAs : {writable : false, enumerable : true, configurable : false,},
	});
}
