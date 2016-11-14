

function QuickUnion(size) {
	this._ids = [];
	for (var i = 0; i < size; i++) {
		this._ids[i] = i;
	}
} 

QuickUnion.prototype._root = function(i) {
	while (i !== this._ids[i] ) {
		i = this._ids[i];
	}
	return i;
}

QuickUnion.prototype.union = function(p, q) {
	
}

QuickUnion.prototype.connected = function(p, q) {
	var pRoot = this._root(p);
	var qRoot = this._root(q);
	return pRoot === qRoot;
}