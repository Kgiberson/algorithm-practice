// Stacks are Last in First out (LIFO) 

function Stack() {
	this.stack = new Array()
	this.pop = function() {
		return this.stack.pop();
	}
	this.push = function() {
		return this.stack.push();
	}
}