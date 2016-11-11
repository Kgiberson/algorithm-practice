/**
 * Problem 1:
 *
 *  Time Complexity: Constant (bc of lookup for a hash table is constant) 
 *  Auxiliary Space Complexity: Constant
 **/

function isThereCat(obj) {

  while(obj['cat']) {
    console.log('There is cat!');
    delete obj['cat'];
  }
  console.log('There is no cat!');
}




/**
 * Problem 2:
 *
 *  Time Complexity: Constant
 *  Auxiliary Space Complexity:  Constant
 **/

function powerOfThrees(n) {
  var result = [];
  var count = 1;
  var temp = 1;

  while(count <= 3) {
    temp *= n;
    result.push(temp);
    count++;
  }

  return result;
}



/**
 * Problem 3:
 *
 *  Time Complexity: n * m (different inputs need independent variables, if two arrays are same length it would be n^2)
 *  Auxiliary Space Complexity: n * m
 **/

function intersectionPoints(arr1, arr2) {
  var result = [];
  var points;

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        points = [arr1[i], arr2[j]];
        result.push(points);
        points = [];
      }
    }
  }

  return result;
}


/**
 * Problem 4:
 *
 *  Time Complexity: Linear?
 *  Auxiliary Space Complexity:
 **/

function nthFibonacci(n) {
  var result = [0,1];

  for(var i = 1; i < n; i++) {
    result[i+1] = result[i] + result[i-1];
  }

  return result[n];