// Return the length of the longest word in the provided sentence
function findLongestWord(str) {
  var wordsArray = str.split(' ');
  var longest = "";
  for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length >= longest.length) {
      longest = wordsArray[i];
    }
  }
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");