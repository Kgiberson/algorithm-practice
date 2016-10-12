// Create a singly linked list in JS

function LinkedList() {
	this.head = null;
}

LinkedList.prototype.push = function(val){
	var node = {
		value: val,
		next: null
	}
	if (!this.head) {
		this.head = node;
	} else {
		var current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = node;
	}
}

LinkedList.prototype.remove = function(val){
	var current = this.head

	if (current.head === val) {
		this.head = current.next
	} else {
		var previous = current;

		while (current.next) {
			if (current.value === val) {
				previous.next = current.next;
				break;
			}
			previous = current;
			current = current.next;
		}
		if (current.value == val){
			previous.next = null;
		}
	}
}
