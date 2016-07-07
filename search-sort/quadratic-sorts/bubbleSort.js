/*
Bubble sort does a swap at each iteration for where the current largest item is smaller than the current iterated item.
The largest number eventually 'bubbles' its way to the end of the array.
 */

module.exports.bubbleSort = function (array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

/*
Time Complexity: Quadratic
 */