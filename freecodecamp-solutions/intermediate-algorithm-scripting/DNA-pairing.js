// A DNA strand is missing its pairing element. Take each character, get its pair, return the results as a 2d array.
function pairElement(str) {
  var paired = [];
  
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }
  
  return paired;
}

pairElement("GCG");
