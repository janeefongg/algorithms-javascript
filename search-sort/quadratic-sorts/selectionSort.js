/*
Selection sort iterates over an array and finds the smallest item of the collection (2nd loop).
The smallest value then gets swapped with the current iterated item in the original loop.
 */

function selectionSort (array) {
  var temp;
  var position;
  
  for (var i = 0; i < array.length - 1; i++) {
    position = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[position] > array[j]) {
        position = j;
      }
    }
    temp = array[position];
    array[position] = array[i];
    array[i] = temp;
  }

  return array;
}


selectionSort([4, 2, 9, 10, 2, 6, 1, 3, 0]);

/*
Time Complexity: Quadratic
 */