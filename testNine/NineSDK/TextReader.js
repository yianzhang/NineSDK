function TextReader () {
	var self = this;
	var _fileNode = null;
	var _reader = new FileReader();
	var _file = null;
	var _result = null;
	var _anchor = 0;

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
			return null;
	}
	
	this.read = function (handler,context) {
		_reader.onload = function(){
			_result = this.result;
			_anchor = 0;
			
			($.proxy(handler,context || self))();
		};
	}
	
	Object.defineProperties(this,{
		content : {
			get : function () {
				return _result;
			},
			configurable : false,
		},
		type : {
			get : function () {
				if (_file) {
					return _file.type;
				} else {
					return undefined;
				}
			},
			configurable : false,
		},
		size : {
			get : function () {
				if (_file) {
					return _file.size;
				} else {
					return NaN;
				}
			},
			configurable : false,
		},
		seek : {
			get : function () {
				return _anchor;
			},
			set : function (i) {
				if (i<0) _anchor = 0;
				if (i>_result.length) _anchor = _result.length;
			},
			configurable : false,
		},
		trigger : {
			get : 	function() {
				return function(){
					if (_fileNode) _fileNode.remove();	
					_fileNode = $("<input type='file' style='display:none' />");
					$(document.body).append(_fileNode);
			
					_fileNode.change(function() {
						_file = null;
						_result = null;
						_anchor = 0;
						
						if (this.value) {
							_file = this.files[0];
							_reader.readAsText(_file);
						}
					});
				
					_fileNode.click();
				};
			},
			configurable : false,
		},
	});
}