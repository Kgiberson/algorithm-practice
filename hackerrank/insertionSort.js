//Insertion Sort part 1
'use strict'

let insertIntoSorted = arr => {
    let num = arr[arr.length - 1];
    let placed = false;
    for (let i = arr.length - 2; i >=0; i--) {
        if (arr[i] > num) {
            arr[i+1] = arr[i];
            printArray(arr);
        } else {
            arr[i+1] = num;
            printArray(arr);
            placed = true;
            break;
        }
    }
    if (!placed) {
        arr[0] = num;
        printArray(arr);
    }
}

let printArray = arr => console.log(arr.join(" "));

function processData(input) {
    //Enter your code here
    let lines = input.split('/n');
    let arr = lines[1].split(' ').map(i => parseInt(i));
    insertIntoSorted(arr);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

// Insertion Sort Part 2

'use strict';

let insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        let shifts = 0
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
            shifts++;
        }
        arr[j+1] = key;
        // printArray(arr)
        return arr;
    }
}

let printArray = arr => console.log(arr.join(" "));

function processData(input) {
    let lines = input.split('\n');
    let arr = lines[1].split(' ').map(i => parseInt(i));
    insertionSort(arr);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
