// Check if a string ens with the given target string.
function confirmEnding(str, target) {
  var length = target.length;
  return str.substr(-length) === target ? true : false;
}

confirmEnding("Bastian", "n");