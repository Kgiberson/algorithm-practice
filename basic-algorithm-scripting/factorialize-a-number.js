
function factorialize(num) {
  var total = num;
  if (num === 0 || num === 1) {
    return 1;
  } 
    
  return num * factorialize(num - 1);
}

factorialize(5);