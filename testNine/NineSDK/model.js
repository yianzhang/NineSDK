var model = {
	localStorage : window.localStorage,
	
	sessionStorage : window.sessionStorage,

	newTextReader : function() {
		return new TextReader();
	},
	
	newTextWriter : function() {
		return new TextWriter();
	},
}

Storage.prototype.getStringItem = function(key) {
	var data = this.getItem(key);
	if (typeof data === "string")
		return data;
	return null;
}

Storage.prototype.setStringItem = function(key,data) {
	this.setItem(key,data);
}

Storage.prototype.getNumericItem = function(key) {
	var data = this.getItem(key);
	if (data)
		return window.parseFloat(data);
	return null;
}

Storage.prototype.setNumericItem = function(key,data) {
	if ($.isNumeric(data))
		this.setItem(key,data);
}

Storage.prototype.getObjectItem = function(key){
	var data = this.getItem(key);
	if (data)
		return JSON.parse(data);
	return null;
};
		
Storage.prototype.setObjectItem = function(key,data) {
	if (typeof data === "object")
		this.setItem(key,JSON.stringify(data));
};

Storage.prototype.getArrayItem = function(key){
	var data = this.getItem(key);
	if (data)
		return JSON.parse(data);
	return null;
};
		
Storage.prototype.setArrayItem = function(key,data) {
	if ($.isArray(data))
		this.setItem(key,JSON.stringify(data));
};
