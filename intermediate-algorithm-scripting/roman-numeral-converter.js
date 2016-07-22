// Convert the given number into a roman numeral.
function convertToRoman(num) {
  var decArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'] ;

  var convertedNum = '';

  for (var i = 0; i < decArray.length; i++) {
    while (decArray[i] <= num) {
      convertedNum += romanArray[i];
      num -= decArray[i];
    }
  }
 return convertedNum;
}

convertToRoman(36);