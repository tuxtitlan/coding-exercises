function exercise7() {
  var test = [
    [1, 2, 3,],
    [4, 0, 6,],
    [7, 8, 9,]
  ];
  console.log('Test case:', test);
  return zeroCross(test);
}

function zeroCross(twoDimArr) {
  var zeroIdx = [];
  var xs = twoDimArr[0].length;
  var ys = twoDimArr.length;
  twoDimArr.forEach(function (row, y) {
    //Used closure to avoid passing y as argument
    function getZeroIdx(x) {
      var x = x || 0;

      //Break condition
      if (x === row.length) {
        return;
      }

      //If zero is found, add position
      if (row[x] === 0) {
        zeroIdx.push([x, y]);
      }

      //Cycle into next position
      getZeroIdx(x + 1);
    }

    getZeroIdx();
  });

  zeroIdx.forEach(function (item) {
    var changeX = true;
    var x = item[0];
    var y = item[1];

    //Used closure to avoid passing changeX, x and y as arguments
    function swapToZero(idx) {
      var i = idx || 0;

      //If change is over X axis and position is same as X length, switch to change Y's
      if (changeX && i === xs) {
        changeX = false;
        return swapToZero();
      }

      //If change is over Y axis and position is same as Y length, break recursion cycle
      if(!changeX && i === ys) {
        return;
      }

      //If change is over X, set [i,y] otherwise [x,i], to zero
      if (changeX) {
        twoDimArr[y][i] = 0;
      } else {
        twoDimArr[i][x] = 0;
      }

      //Cycle into next position
      swapToZero(i + 1);
    }

    swapToZero();
  });

  return twoDimArr;
}

module.exports = exercise7;

