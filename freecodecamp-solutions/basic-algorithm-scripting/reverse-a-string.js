// Reverse the provided string
function reverseString(str) {
  var newString = str.split("").reverse().join('');
  return newString;
}

reverseString("hello");