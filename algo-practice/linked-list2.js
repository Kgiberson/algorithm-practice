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

LinkedList.prototype.append = function(data) {
	if(this.head.data == null) {
		this.head = new Node(data, null);
	} else {
		let cur = this.head;
		while(cur.next != null) {
			cur = cur.next;
		}
		const node = new Node(data, null);
		cur.next = node;
	}
	this.length += 1;
};

