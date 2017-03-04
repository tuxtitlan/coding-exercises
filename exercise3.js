// 3. Write a function that computes a Gregory-Leibniz series,
// a.k.a. approximation of PI, limited to 10^6
// https://en.wikipedia.org/wiki/Approximations_of_%CF%80#Gregory.E2.80.93Leibniz_series
function exercise3 () {
  var k = 1;
  var n = Math.pow(10, 6);
  var result = 0;
  
  //At first tried using a recursive approach, but due to JS
  //limitations on call stack size, prefered to use a for cycle

  for (k; k <= n; k++) {
    result += summatory(k, n);
  }

  return 4 * result;
}

function summatory (k, n) {
  //Any even power would make -1 postive, used module to determine 
  //dividend instead Math.pow, because Math.pow would throw a 
  //RangeError on max call size stack exceeded
  var dividend = ((k + 1) % 2 === 0)? 1 : -1; 
  var divisor = (2 * k) - 1;
  var result = (dividend / divisor);

  //Recursive approach would use this code
  /*
  if (k === n) {
    return result;
  }

  return result + summatory(k++, n);
  */

  return result;
}

module.exports = exercise3;