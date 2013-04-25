function TextReader () {
	this.node = this._fileNode = $("<input type='file' />");
	this._fileNode.css({
		"display":"none",
	});
	
	$(document.body).append(this._fileNode);
	
	this.file = null;
	this.reader = null;
	this.result = "";
}

TextReader.prototype.trigger = function() {
	var self = this;
	return function(){self._fileNode.click();};
}

TextReader.prototype.content = function () {
	return this.result;
}

TextReader.prototype.onload = function (handler,context) {
	var self = this;
	this._fileNode.change(function() {
		if (this.value) {
			self.file = this.files[0];
			self.reader = new FileReader();
			self.reader.readAsText(self.file);
			self.reader.onload = function() {
				self.result = self.reader.result;
				($.proxy(handler,context || self))();
			};
		}
		else {
			self.file = null;
			self.reader = null;
			self.result = "";
		}
	});
}
