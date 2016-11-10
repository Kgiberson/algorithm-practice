// Reverse digits of an integer

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// Binary Overflow = A CPU with a capacity of 8 bits has a capacity of up to 11111111 in binary.
// If one more bit was added there would be an overflow error.
// When the number is bigger than 8 digist, CPU drops the overflow digit bc it can't be stored anywhere

// Binary =  0 & 1
// Denary = base 10
// The circuits in a computer's processor are made up of billions of transistors. A transistor is a tiny switch
// that is activated by the elctronic signals it receives. 1 and 0 represent the on and off states of a transistor.
// 0 0 1 1 (binary)
// x x x x
// 8 4 2 1
// -------
// 0+0+2+1 = 3 (denary)

// Computers use a fixed number of bits to represent integers. Most common bit lengths are 9, 16, 32, and 64.
// The largest value of an 8 big integer variable is 255.


// Pseudocode: 
// converst to toString
// split, reverse, join
// until string[i] !== 0, count how many 0s there are
// Edge cases: 
// 100 or 10
// negative numbers

return string to number + 
var reverse = function(x) {
	var y = x.toString();
	var z = y.split('').reverse().join('');

	return Number(z);
};
