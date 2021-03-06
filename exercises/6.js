function exercise6() {
  var test = 'aabcccccaaa';
  console.log('Test case:', test);
  return compressString(test);
}

function compressString(str, idx, compressed, letterCount) {
  var c = compressed || '';
  var i = idx || 0;
  var count = 1;
  var lc = letterCount || 1;
  
  //If compressed string is greater than original string, return original string
  //With caveat of getting an extra call to compressString for length check
  if (c.length >= str.length) {
    return str;
  }

  //If position is less that original string lenght proccess testString
  //otherwise return compressed string  
  if (i < str.length) {
    //If current letter and next one are equal, increase letter counter
    if (str[i] === str[i+1]){
      lc++;
    //Otherwise, set letter and counter into compressed string
    } else {
      c += str[i] + lc;
      lc = 1;
    }
    //Continue compressing process
    return compressString(str, i + 1, c, lc);
  }

  return c;
}

module.exports = exercise6;
