function TextWriter() {
	this._text = "";
}

TextWriter.prototype.trigger = function () {
	var self = this;
	return function(){
		window.Blob = window.Blob || window.WebKitBlob || window.MozBlob;
		var blob = new Blob([self._text],{type:"text/plain;charset=UTF-8"});
		self.saveAs(blob, "download.txt");
	};
}

TextWriter.prototype.write = function (text) {
	this._text += text;
}

TextWriter.prototype.writeln = function (text) {
	this.write(text);
	this._text += '\n';
}

TextWriter.prototype.saveAs = function (blob, name){
	window.URL = window.URL || window.WebKitURL || window.MozURL;
	navigator.saveBlob = navigator.saveBlob || navigator.webkitSaveBlob || navigator.mozSaveBlob;

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

//		URL.revokeObjectURL(url);
	}
}
