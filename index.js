var exercise3 = require('./exercise3');

console.log('Exercise 3');
console.time('Timing');
console.log('Approximation:', exercise3(), 'Pi:', Math.PI);
console.timeEnd('Timing');