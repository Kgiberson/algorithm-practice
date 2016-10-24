// FIFO - first in first out queue

function Queue() {
	this.stac = new Array();
	this.dequeue = function(){
		return this.stac.pop();
	}
	this.enqueue = function(item) {
		return this.stac.unshift(item);
	}
}