var expect = require('expect.js');

var bubbleSort = require('../search-sort/quadratic-sorts/bubbleSort').bubbleSort;
var insertionSort = require('../search-sort/quadratic-sorts/insertionSort').insertionSort;

describe('Search and Sorts', function () {
  it('bubble sort - should sort integers in array in ascending order', function () {
    expect(bubbleSort([8, 7, 10, 1, 2, 5, 11, 3])).to.eql([1, 2, 3, 5, 7, 8, 10, 11]);
  });
  
  it('insertion sort - should sort integers in array in ascending order', function () {
    expect(insertionSort([4, 2, 9, 10, 2, 6, 1, 3, 0])).to.eql([0, 1, 2, 2, 3, 4, 6, 9, 10]);
  })
});


