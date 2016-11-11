// Keep track of a set of elements partitioned into a number
// of disjointed subsets. Checks whether a path between two nodes exists.
// Inspired by Robert Sedgewick's Java implementation

function QuickFind(size) {
	this._ids = [];
	for (var i = 0; i < size; i++) {
		this._ids[i] = i;	
	}
}

QuickFind.prototype.union = function(p, q) {
	var size = this._ids.length;
	var pVal = this._ids[p];
	var qVal = this._ids[q];
	for (var i = 0; i < size; i++ ) {
		if (this._ids[i] === qVal) {
			this._ids[i] = pVal;
		}
	}
};

QuickFind.prototype.connected = function(p, q) {
	return this._ids[p] === this._ids[q];
}
