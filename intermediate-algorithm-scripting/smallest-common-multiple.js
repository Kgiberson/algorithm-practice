// Find the smallest common muliple of the provided 
// parameters that can be evenly divided by both, as well 
// as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
  var sortedArr = arr.sort(function(a,b) { return b - a });
  var range = [];
  for (var i = sortedArr[0]; i >= sortedArr[i]; i--) {
    range.push(i);
  }
  
  return range.reduce(function(a, b) {
    return lcm(a, b);
  });
  
  
  function lcm(a, b) {
    return (Math.abs(a * b) / gcd(a, b));
  }
  
  function gcd(a, b) {
      var temp;
    while (b != 0) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
}


smallestCommons([1,5]);

// not complete