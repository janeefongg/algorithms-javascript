/*
Insertion sort takes the current iteration and moves backwards in order to find a spot where the 
current iteration (temp) is larger than the current compared value. If the temp is smaller than the 
current compared value, this value is shifted to the right, creating an open slot. If the temp is larger than the compared value, 
the temp will be inserted into the open slot.
 */

module.exports.insertionSort = function (array) {
  var temp;
  var counter;

  for (var i = 0; i < array.length; i++) {
    temp = array[i];
    counter = i - 1;
    while (counter >= 0 && temp < array[counter]) {
      array[counter + 1] = array[counter];
      counter = counter - 1;
    }
    array[counter + 1] = temp;
  }

  return array;
}

/*
Time Complexity: Quadratic
 */