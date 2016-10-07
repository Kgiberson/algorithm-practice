// Given an array of integers and a value, determine if 
// there are any two integers in the array which sum equal to the given value.

// Runtime Complexity: Linear, O(n)
// Space Complexity: Lienar, O(n)

// Pseudocode:
// Step 1: Scan whole array once and store visited elements in a hash set.
// Step 2: During scan, for every element 'e' in array, check if 'val'-'e' is present in the hash set
// 		- if 'val'-'e' is present, it means the pair (e, val-e ) whose sum is equal to the given val exists in the array 
// 		- if you search through and don't find pair, return false.

let findSumOfTwo = function(A, val) {
	let foundValues = new Set();
	for (let a in A) {
		if (foundValues.has(val - A[a])) {
			return true;
		} 
		foundValues.add(A[a]);
	}
	return false;
}