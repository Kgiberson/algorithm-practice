// Return the provided string with the first letter of each word copitalized.

function titleCase(str) {
  var array = str.toLowerCase().split(' ');
  var newArray =[];
  for (var i = 0; i < array.length; i++) {
    var capWord = array[i].charAt(0).toUpperCase() + array[i].substring(1);
    newArray.push(capWord);
  }
  var newString = newArray.join(' ');
  return newString;
}


titleCase("I'm a little tea pot");