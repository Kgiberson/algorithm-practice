// Test is a given string is a palindrome
function palindrome(str) {
  var string = str.replace(/[\W_]+/g, '').toLowerCase();
  var reverse = string.split('').reverse().join('');
  if (string === reverse) {
    return true;
  } else {
    return false;
  }
}



palindrome("eye");