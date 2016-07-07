/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient 
space to hold the additional characters, and that you are given the 'true' length of the string.

Input: "Mr John Smith   " 13
Output: "Mr%20John%20Smith"

Psuedocode:
-Keep a counter for the true length
-While the counter is incrementing, add the character or %20 if it is a space
**Use string builder
 */

module.exports.urlify = function (string, length) {
  var lenCounter = 0;
  var results = [];

  while (lenCounter < length) {
    if (string.charAt(lenCounter) === " ") {
      results.push('%20');
      lenCounter++;
    } else {
      results.push(string.charAt(lenCounter));
      lenCounter++;
    }
  }

  return results.join('');
};