function TextReader () {
	this._reader = new FileReader();
	this._file = null;
	this._result = null;
	this._anchor = 0;
}

TextReader.prototype.trigger = function() {
	var self = this;
	return function(){
		if (self.node) self.node.remove();	
		self.node = self._fileNode = $("<input type='file' style='display:none' />");
		$(document.body).append(self._fileNode);

		self._fileNode.change(function() {
			self._file = null;
			self._result = null;
			self._anchor = 0;
			
			if (this.value) {
				self._file = this.files[0];
				self._reader.readAsText(self._file);
			}
		});
	
		self._fileNode.click();
	};
}

TextReader.prototype.content = function () {
	return this._result;
}

TextReader.prototype.type = function () {
	if (self._file)
		return self._file.type;
	else
		return "null";
}

TextReader.prototype.size = function () {
	if (self._file)
		return self._file.size;
	else
		return 0;
}

TextReader.prototype.getChar = function () {
	if (this._result!=null) {
		if (0<=this._anchor && this._anchor<this._result.length)
			return this._result[this._anchor++];
		else 
			return null;
	} else 
		return null;
}

TextReader.prototype.getString = function () {
	if (this._result!=null) {
		if (0<=this._anchor && this._anchor<this._result.length) {
			var x = this._result.slice(this._anchor).search(/\S/);
			if (x==-1) x = this._result.length;
			this._anchor += x;
			
			if (0<=this._anchor && this._anchor<this._result.length) {
				x = this._result.slice(this._anchor).search(/\s/);
				if (x==-1) x = this._result.length;
				else x += this._anchor;
				
				var v = this._result.slice(this._anchor,x);
				this._anchor = x;
				return v;
			} else
				return null;
		} else 
			return null;
	} else 
		return null;
}

TextReader.prototype.getLine = function () {
	if (this._result!=null) {
		if (0<=this._anchor && this._anchor<this._result.length) {
			var x = this._result.slice(this._anchor).search(/\n/);
			if (x==-1) x = this._result.length;
			else x += this._anchor;
			
			var v = this._result.slice(this._anchor,x);
			if (v[v.length-1]=="\r") v = v.slice(0,-1);
			this._anchor = x+1;
			return v;
		} else 
			return null;
	} else 
		return null;
}

TextReader.prototype.seek = function (i) {
	if (i<0) i = 0;
	if (i>this._result.length) i = this._result.length;
	this._anchor = i;
}

TextReader.prototype.read = function (handler,context) {
	var self = this;
	this._reader.onload = function(){
		self._result = this.result;
		self._anchor = 0;
		
		($.proxy(handler,context || self))();
	};
}
