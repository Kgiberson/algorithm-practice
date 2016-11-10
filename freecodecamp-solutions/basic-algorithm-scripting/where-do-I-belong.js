// Return the lowest index at which a value should be inserted 
// into an array once it has been sorted. 
function getIndexToIns(arr, num) {
  var sortedArr = arr.sort(function(a,b) {
    return a - b;
  });
  for (var i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= num) { return i; }
  }
  return sortedArr.length;
}

getIndexToIns([40, 60], 50);
