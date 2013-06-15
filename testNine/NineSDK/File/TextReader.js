function TextReader () {
	var self = this;
	var _fileNode = undefined;
	var _reader = new FileReader();
	var _file = undefined;
	var _result = undefined;
	var _anchor = 0;

	//this.trigger
	Object.defineProperty(this, "trigger", {
		get : 	function() {
			return function(){
				if (_fileNode) _fileNode.remove();	
				_fileNode = $("<input type='file' style='display:none' />");
				$(document.body).append(_fileNode);
		
				_fileNode.change(function() {
					_file = undefined;
					_result = undefined;
					_anchor = 0;
					
					if (this.value) {
						_file = this.files[0];
						_reader.readAsText(_file);
					}
				});
			
				_fileNode.click();
			};
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.content
	Object.defineProperty(this, "content", {
		get : function () {
			return _result;
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.type
	Object.defineProperty(this, "type", {
		get : function () {
			if (_file) {
				return _file.type;
			} else {
				return undefined;
			}
		},
		enumerable : true,
		configurable : false,
	});
	
	//this.size
	Object.defineProperty(this, "size", {
		get : function () {
			if (_file) {
				return _file.size;
			} else {
				return NaN;
			}
		},
		enumerable : true,
		configurable : false,
	});
	
	this.getChar = function () {
		if (!_result) return undefined;

		if (0<=_anchor && _anchor<_result.length)
			return _result[_anchor++];
		else 
			return undefined;
	}
	
	this.getString = function () {
		if (!_result) return undefined;
		
		if (0<=_anchor && _anchor<_result.length) {
			var x = _result.slice(_anchor).search(/\S/);
			if (x==-1) 
				_anchor = _result.length;
			else 
				_anchor += x;
		
			if (0<=_anchor && _anchor<_result.length) {
				x = _result.slice(_anchor).search(/\s/);
				if (x==-1) 
					x = _result.length;
				else 
					x += _anchor;
				
				var v = _result.slice(_anchor,x);
				_anchor = x;
				return v;
			} else
				return undefined;
		} else 
			return undefined;
	}
	
	this.getLine = function () {
		if (!_result) return undefined;

		if (0<=_anchor && _anchor<_result.length) {
			var x = _result.slice(_anchor).search(/\n/);
			if (x==-1) 
				x = _result.length;
			else 
				x += _anchor;
			
			var v = _result.slice(_anchor,x);
			if (v[v.length-1]=="\r") v = v.slice(0,-1);
			_anchor = x+1;
			return v;
		} else 
			return undefined;
	}
	
	//this.readHead
	Object.defineProperty(this, "readHead", {
		get : function () {
			return _anchor;
		},
		set : seek,
		enumerable : true,
		configurable : false,
	});
	
	this.seek = seek;
	
	this.reading = function (handler,context) {
		var self = this;
		_reader.onload = function(){
			_result = this.result;
			_anchor = 0;
			
			($.proxy(handler,context || self))();
		};
	}
	
	Object.defineProperties(this, {
		getChar : {writable : false, enumerable : true, configurable : false,},
		getString : {writable : false, enumerable : true, configurable : false,},
		getLine : {writable : false, enumerable : true, configurable : false,},
		seek : {writable : false, enumerable : true, configurable : false,},
		reading : {writable : false, enumerable : true, configurable : false,},
	});
	
	function seek(i) {
		if (i==undefined || !$.isNumeric(i))
			return;
			
		if (i<0) {
			_anchor = 0;
		} else if (i>_result.length) {
			_anchor = _result.length;
		} else {
			_anchor = i;
		}
	}
}
