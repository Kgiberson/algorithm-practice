// Given an array of two numbers, return the sum of those two numbers and
// all numbers between them
function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  return (max + min) * (max - min + 1) / 2;
}

sumAll([1, 4]);