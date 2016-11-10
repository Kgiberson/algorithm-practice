// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  var tmp = arr.join('~').toLowerCase();
  var lcArr = tmp.split('~');
  var secondElementArr = lcArr[1].split('');
  for (var i = 0; i < secondElementArr.length; i++ ) {
    if (lcArr[0].indexOf(secondElementArr[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);