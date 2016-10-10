// Concatenate a list of strings.
// Runtime Complexity = O(n^2)
// On each concatentation a new copy of the string is created and the two strings are copied over, character by cahracter

function joinWords(words) {
	var rtnStr = '';
	for ( var w in words ) {
		rtnStr += words[w];
	}
	return rtnStr;
}


// StringBuffer helps avoid this process by creating an array of all strings, copying them back to a string when necessary

function reverse(str) {
	var rtnString = [];
	if (!str || typeof str !== 'string' || str.length < 2) return str;

	for (var i = str.length - 1; i >= 0; i--) {
		rtnStr.push(str[i]);
	}
	return rtnStr.join('');
}

// StringBuffer Object

var StringBuffer = function() {
	this.buffer = [];
	this.index = 0;
}

StringBuffer.prototype = {
	append: function(s) {
		this.buffer[this.index] = s;
		this.index += 1;
		return this;
	},
	toString: function() {
		return this.buffer.join('');
	}
};