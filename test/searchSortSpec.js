var expect = require('expect.js');

var bubbleSort = require('../search-sort/quadratic-sorts/bubbleSort').bubbleSort;
var insertionSort = require('../search-sort/quadratic-sorts/insertionSort').insertionSort;
var selectionSort = require('../search-sort/quadratic-sorts/selectionSort').selectionSort;

var binarySearchArray = require('../search-sort/binarySearchArray').binarySearchArray;

describe('Sorts', function () {
  it('bubble sort - should sort integers in array in ascending order', function () {
    expect(bubbleSort([8, 7, 10, 1, 2, 5, 11, 3])).to.eql([1, 2, 3, 5, 7, 8, 10, 11]);
  });
  
  it('insertion sort - should sort integers in array in ascending order', function () {
    expect(insertionSort([4, 2, 9, 10, 2, 6, 1, 3, 0])).to.eql([0, 1, 2, 2, 3, 4, 6, 9, 10]);
  });

  it('selection sort - should sort integers in array in ascending order', function () {
    expect(insertionSort([4, 2, 9, 10, 2, 6, 1, 3, 0])).to.eql([0, 1, 2, 2, 3, 4, 6, 9, 10]);
  });
});

describe('Searches', function () {
  it('should return index of target found in a sorted array', function () {
    expect(binarySearchArray([ 11, 12, 13, 14, 15 ], 11)).to.be(0);
  });
});


