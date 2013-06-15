function FileUploader (url, method, name) {
	var self = this;
	var _fileNode = undefined;
	var _formNode = undefined;
	var _submitNode = undefined;

	//this.trigger
	Object.defineProperty(this, "trigger", {
		get : 	function() {
			return function(){
				if (_formNode) _formNode.remove();
				_formNode = $("<form style='display:none' />");	
				
				_formNode.attr("enctype", "multipart/form-data");
				_formNode.attr("action", url);
				if (method.toLowerCase() == "post")
					_formNode.attr("method", "post");
				else if (method.toLowerCase() == "get")
					_formNode.attr("method", "get");
				
				_fileNode = $("<input type='file' />");
				_fileNode.attr("name", name);
				
				_submitNode = $("<input type='submit' />");
				
				_formNode.append(_fileNode);
				_formNode.append(_submitNode);
				$(document.body).append(_formNode);
				
				_fileNode.change(function() {
					if (this.value) {
						_submitNode.click();
					}
				});

				_fileNode.click();
			};
		},
		enumerable : true,
		configurable : false,
	});
	
	Object.defineProperties(this, {
	});
}
