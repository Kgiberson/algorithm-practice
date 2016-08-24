// Convert a string to a spinal case, all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  var result = str.replace(/ |_/g, '-').toLowerCase();
  
  return result;
} 


spinalCase('This Is Spinal Tap');