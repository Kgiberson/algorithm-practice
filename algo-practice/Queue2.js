function Queue() {
	this.length = 5;
	// this.data = [];
	this.data = new Array(5);
	this.pointerPop = 0;
	this.pointerPush = 0;
}


Queue.prototype.push = function(number) {
	var array = this.data;
	var length = this.length;

	// if the array is full, double the size to allow for more space to push
	if (typeof array[this.pointerPush] === "number") {
		this.pointerPush = length;
		array = array.concat(new Array(length));
		length*= 2;
		array[this.pointerPush] = number;
		this.pointerPush++;
	} else {
		array[this.pointerPush] = number;
		this.pointerPush++;
	}
	if (this.pointerPush >= length) {
		this.pointerPush = 0;
	}
}

Queue.prototype.pop = function() {
	var array = this.data;
	var popped = array[this.pointerPop];
	// handle underflow
	if (array[this.pointerPop] === null) {
		this.pointerPush = 0;
		this.pointerPop = 0;
		throw new Error("pop called on an empty Queue")
	} else {
		array[this.pointerPop] = null;
		this.pointerPop++;
	}
	if (this.pointerPop >= this.length) {
		this.pointerPop = 0;
	}
	return popped;
}





var babyQueue = new Queue();
babyQueue.push(1);
babyQueue.push(2);
babyQueue.push(3);
babyQueue.push(4);
// console.log(babyQueue.pop())
babyQueue.push(5);
babyQueue.push(6);
console.log(babyQueue.pop())
console.log(babyQueue.pop())
console.log(babyQueue.pop())
console.log(babyQueue.pop())
console.log(babyQueue.pop())

