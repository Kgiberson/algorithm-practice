// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
  var previous = 0;
  var current = 1;
  var result = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }
    var added = previous + current;
    previous = current;
    current = added;
  }
  return result;
}

sumFibs(4);
