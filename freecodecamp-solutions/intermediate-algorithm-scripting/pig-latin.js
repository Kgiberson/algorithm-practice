// Translate the provided string to pig latin

function translatePigLatin(str) {
//   Break original string into an array of letters
  var letters = str.split("");
//   Regex for strings that contain 'aeiou'
  var vowelRegex = /[aeiou]/;
  if (vowelRegex.test(letters[0])) {
    //     If first letter is a vowel, add 'way' to string
    return letters.join("") + "way";
  }
  while (true) {
//     For cases not matching vowels
    if (!vowelRegex.test(letters[0])) {
//       If the letter is not a vowel, spice the letter and push it to the end
      letters.push(letters.splice(0,1));
      
    } else {
      break;
    }
  }
//   Add 'ay' to end and join string
  str = letters.join("") + "ay";
  
  return str;
}

translatePigLatin("consonant");