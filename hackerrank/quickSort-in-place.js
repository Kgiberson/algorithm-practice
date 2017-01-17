// Quicksort in Place

'use strict';

let quickSort = (arr, left, right) => {
	let len = arr.length,
	pivot, partitionIndex;
	
	if (left < right) {
		pivot = right;
		partitionIndex = partition(arr, pivot, left, right);

		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
}

function swap(arr, firstIndex, secondIndex) {
	let temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;
}

function partition(arr, pivot, left, right) {
	let pivotValue = arr[pivot],
			partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (arr[i] < pivotValue) {
			swap(arr, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(arr, right, partitionIndex);
	printArray(arr);
	return partitionIndex;
}

let printArray = arr => console.log(arr.join(" "));

function processData(input) {
	let lines = input.split('\n');
	let arr = lines[1].split(' ').map( i => parseInt(i));
	quickSort(arr, 0, arr.length - 1);
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	processData(_input);
});