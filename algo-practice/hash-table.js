function HashTable(size) {
	this.values = {};
	this.numberOfValues = 0;
	this.size = size;
}

HashTable.prototype.add = function(key, value) {
	var hash = this.calculateHash(key);
	if (!this.values.hasOwnProperty(hash)) {
		this.values[hash] = {};
	}
	if (!this.values[hash].hasOwnProperty(key)) {
		this.numberOfValues++;
	}
	this.values[hash][key] = value;
};

HashTable.prototype.length = function() {
	return this.numberOfValues;
}

HashTable.prototype.print = function() {
	var string = '';
	for (var value in this.values) {
		for (var key in this.values[value]) {
			string += this.values[value][key] + ' ';
		}
	}
	console.log(string.trim());
}