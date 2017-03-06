function exercise7() {
  var test = 'abcdefg';
  return getPermutations(test);
}

function getPermutations(string) {
  var elements = string.split('');
  var elemLength = elements.length;
  var result = [];
  
  //Implemented Heap algorithm to get all getPermutations
  //used closure to avoid passing elements array every recursion iteration
  function permutate(n) {
    var i = 0;
    var posToSwitch;

    //Push permutation if n equals 1
    if (n === 1) {
      return result.push(elements.join(''));
    }

    //Each iteration would generate every permutations with current last element
    for (i; i < n; i++) {
      //Set posToSwitch to zero as default
      posToSwitch = 0;
      //Generates permutations of the n - 1 elements
      permutate(n - 1);
      //If n is even, set postToSwitch to i
      if (n % 2 === 0) {
        posToSwitch = i;
      }

      switchPos(elements, posToSwitch, n - 1);
    }
  }

  permutate(elemLength);
  return result;
}

function switchPos(arr, pos1, pos2) {
  var temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}

module.exports = exercise7;