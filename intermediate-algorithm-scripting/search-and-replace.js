// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

function myReplace(str, before, after) {
	// Check to see if the first letter is uppercase
  if (/[A-Z]/.test(before[0])) {
  	// Change after to be capitalized
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Replace original string with edited one
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");