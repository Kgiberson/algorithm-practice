// Implement a doubly-linked list

function Node(data) {
	this.data = data;
	this.next = null;
	this.previous = null;
}

function DoublyList() {
	this.head = null;
	this.tail = null;
	this._length = 0;
}

DoublyList.prototype.add = function(value) {
	var node = new Node(value);

	// 1st use case: list is empty
	if (this._length === 0) {
		this.head = node;
		this._length = 1;
		this.tail = node;

		return node;
	} else {
		this.tail.next = node;
		node.previous = this.tail;
		this.tail = node;
	}
}

DoublyList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head,
			counter = 1,
			length = this._length,
			message = {failure: "Failure: non-existent node"};

	if (length === 0 || position < 1 || position > length) {
		throw new Error(message.failure);
	}

	while (count < position) {
		currentNode = currentNode.next;
		counter++;
	}

	return currentNode;
}

// DoublyList.prototype.remove = function(position) {
// 	var currentNode = this.head,
// 			counter = 1,
// 			length = this._length,
// 			beforeNodeToDelete = null,
// 			nodeToDelete = null,
// 			deletedNode = null;

// 	if (length === 0 || position < 1 || position > length) {
// 		throw new Error(message.failure);
// 	}

// 	if (position === 1) {
// 		this.head = currentNode.next;

// 		if (!this.head) {
// 			this.head.previous = null;
// 		}
// 	}
// }
