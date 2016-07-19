/*
Implement a method to perform basic string compression using the counts of repeated characters.

Input: 'aabcccccaaa'
Output: 'a2b1c5a3'
 */

'use strict'

module.exports = (input) => {
  var results = [];
  var counter = 0;
  var starter;

  for (var i = 0; i < input.length; i++) {
    if (!starter) {
      starter = input[i];
      counter++;
    } else if (input[i] === starter) {
      counter++;
    } else {
      results.push(starter + counter);
      starter = input[i];
      counter = 1;
    }
  }

  results.push(starter + counter);
  return results.join('');
};

