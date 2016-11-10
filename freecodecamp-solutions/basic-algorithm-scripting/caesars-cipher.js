// Write a function which takes a ROT13 encoded string as input
// and returns a decoded string.

function rot13(str) { // LBH QVQ VG!
  var arr = str.split('');
  var newArray = [];
  var letterCode = 0;
  arr.forEach(function(letter) {
    if (letter.charCodeAt() < 65 || letter.charCodeAt() > 90) {
      letterCode = letter.charCodeAt();
    } else { 
      if (letter.charCodeAt() + 13 > 90) {
        letterCode = letter.charCodeAt() - 13;
      } else {
        letterCode = letter.charCodeAt() + 13;
      }
    }
    newArray.push(String.fromCharCode(letterCode));
  });
  return newArray.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");