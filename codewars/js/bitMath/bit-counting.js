var countBits = function(n) {
  let binary = n.toString(2);
  let binaryArr = binary.split('');
  let oneBitCount = 0;
  for (let i = 0; i < binaryArr.length; i++) {
    if ( binaryArr[i] == 1) {
     oneBitCount++; 
    };
  };
  return oneBitCount;
};

// Refactored Solution

var countBits = function(n) {
  return n.toString(2).split('0').join('').length;
}