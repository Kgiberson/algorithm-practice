// Complexity: O(n log n)
// Firefox and Safari use this to implement Array.prototype.sort() bc it is stable, the order of equivalent items remains the same before and after the sort

function mergeSort(items) {
	// Terminal case: 0 or 1 item arrays are already sorted
	if (items.length < 2) {
		return items;
	}

	let middle = Math.floor(items.length / 2 ),
				left = items.slice(0, middle),
				right = items.slice(middle);
	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	let result = [];
	while (left.length > 0 && right.length > 0) {
		result.push(left[0] < right[0] ?  left.shift() : right.shift());
	}
	return result.concat(left.length ? left : right);
}

var test = [1,2,8,4,25,0,14];
console.log(mergeSort(test));