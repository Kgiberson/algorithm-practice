// Repeat a string, return an empty string if num is not a postitive integer.
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else {
    return str.repeat(num);
  }
}

repeatStringNumTimes("abc", 3);