/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0
 */

'use strict'

module.exports = (matrix) => {
  let m;
  let n;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        m = i;
        n = j;
        break;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i === m) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }

    for (let k = 0; k < matrix[i].length; k++) {
      if (k === n) {
        matrix[i][k] = 0;
      }
    }
  }

  return matrix;
}