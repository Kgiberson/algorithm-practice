function Node(data, next) {
	this.data = data;
	this.next = next;
}

Node.prototype.getData = function() {
	console.log(this.data);
};

function LinkedList() {
	this.head = new Node(null, null);
	this.length = 0;
};

