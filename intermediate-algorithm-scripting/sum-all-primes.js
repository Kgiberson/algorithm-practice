
// Recursive solution
function sumPrimes(num) {
  
  function isPrime(number) {
    for (var i = 2; i <= number; i++) {
      if (number % i === 0 && number != i) {
        return false;
      }
    }
    return true;
  }
  if ( num === 1 ){
    return 0;
  }
  if (isPrime(num) === false){
    return sumPrimes(num - 1);
  }
  if(isPrime(num) === true){
    return num + sumPrimes(num -1);
  }
}

sumPrimes(10);


// Solution 2:

function sumPrimes(num) {
  
  var sieve = [], primes = [];
  for (var i = 2; i <= num; i++) {
    if (!sieve[i]) {
//     i has not been market. therefore it is a prime
      primes.push(i);
      for (var j = (i * 2); j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }
  var sum = primes.reduce( function(a,b) { return a + b; }, 0);
  return sum;
}
