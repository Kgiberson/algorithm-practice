// Quicksort  Part 1
'use strict'

let quickSort = arr => {
	let p = arr[0];
	let left = [];
	let right = [];
	let equal = p;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < p) {
			left.push(arr[i]);
		} else if (arr[i] > p) {
			right.push(arr[i]);
		} else {
			return;
		}
	}
	let finalArr = left.concat(equal).concat(right);
	printArray(finalArr);
}

let printArray = arr => console.log(arr.join(" "));

function processData(input) {
	let lines = input.split('\n');
	let arr = lines[1].split(' ').map(i => parseInt(i));
	quickSort(arr);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function () {
	processData(_input);
})