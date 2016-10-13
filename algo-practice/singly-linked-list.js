// Implement a singly-linked list

function Node(data) {
	this.data = data;
	this.next = null;
}

function SinglyList(){
	this.head = null;
	this._length = 0;
}

SinglyList.prototype.add = function(value) {
	var node = new Node(value),
			currentNode = this.head;

			// 1st use case: empty list
			if (!currentNode) {
				this.head = node;
				this._length++;

				return node;
			}

			// 2nd use case: a non-empty list
			while (currentNode.next) {
				currentNode = currentNode.next;
			}

			currentNode.next = node;
			this._length++;
			return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head,
			length = this._length,
			count = 1,
			message = {failure: 'Failure: non-existent node in this list'};

	// 1st use case: invalid position
	if (position > length || length === 0 || position < 1) {
		throw new Error(message.failure);
	}
	// 2nd use case: valid position
	while (count < position) {
		count++;
		currentNode = currentNode.next;
	}
	return currentNode;
}

SinglyList.prototype.remove = function(position) {
	var currentNode = this.head,
			beforeNodeToDelete = null,
			nodeToDelete = null,
			deletedNode = null,
			count = 1,
			length = this._length,
			message = {failure: 'Failure: non-existent node in this list'};

	// Use case 1 = invalid position
	if (position > length || length === 0 || position < 1) {
		throw new Error(message.failure);
	}

	// Use case 2 = node to delete is the head
	if (position === 1) {
		this.head = currentNode.next;
		deletedNode = currentNode;
		currentNode = null;
		this._length--;

		return deletedNode;
	}

	// Use case 3 = valid position, not the first position
	while (count < position) {
		beforeNodeToDelete = currentNode;
		nodeToDelete = currentNode.next
		count++;
	}

	beforeNodeToDelete.next = nodeToDelete.next;
	deletedNode = nodeToDelete;
	nodeToDelete = null;
	this._length--

	return deletedNode;

}
