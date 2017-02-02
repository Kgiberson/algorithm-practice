let list = [[1,2,3],[4,5],[6]];

const flatten = arr => arr.reduce((a,b) => a.concat(Array.isArray(b) ? flatten(b) : b ), []);