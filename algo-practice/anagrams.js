// Given 2 strings, write a method to decide if one is a permutation
// of the other.

function permutation(s, t) {
	if (s.length !== t.length) {
		return false;
	}
	let sArrary = s.split('');
	let charCounter = {};
	for (let i = 0; i < sArray.length; i++) {
		charCounter[sArray[i]]++;
	}
	for (let j = 0; j < t.length; i++) {
		let c = t.charAt(j);
		if (charCounter[c]-- < 0) {
			return false;
		}
	}
	return true;
}