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

LinkedList.prototype.prettyPrint = function() {
	const cur = this.head;
	let result = "";

	while (cur !== null) {
		if (cur.next === null) {
			result += cur.data;
		} else {
			result += cur.data + ", ";
		}
		cur = cur.next;
	}
	console.log(result);
};