// Truncate a string if it is longer than the given maximum string length. Return the truncated string with a '...' ending.
function truncateString(str, num) {
  var length = num - 3;
  if (str.length < num || str.length === num) {
    return str;
  } else if (num > 3) {
     return str.substr(0, length) + '...';
  } else {
     return str.substr(0, num) + '...';
  }
}


truncateString("A-tisket a-tasket A green and yellow basket", 11);