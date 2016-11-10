// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  // use filter to return true values
  var arr = collection.filter( function (obj) {
    // Check values in source and compare with objects in collection
    for (var i in source) {
      if (source[i] != obj[i]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });