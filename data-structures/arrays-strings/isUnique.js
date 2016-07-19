/*
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?

Psuedocode (with additional data structure array):
//create a stringbuilder
//iterate through string
  //add to stringbuilder if character does not already exist in it
//return joined stringbuilder

Psuedocode (without additional data structures):
//iterate through string
  //iterate through string again with the current iteration
    //if duplicate exists, splice
//return string
 */

//with additional data structure
//time complexity: o(n^2) because of for loop and indexof
'use strict'

module.exports.isUnique = (string) => {
  let strArr = [];

  for (let i = 0; i < string.length; i++) {
    if (strArr.indexOf(string.charAt(i)) < 0) {
      strArr.push(string.charAt(i));
    }
  }
  return strArr.join('');
};

//without additional data structure
//time complexity: o(n^2) because of for loop with inner for loop
module.exports.isUnique2 = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string.charAt(i) === string.charAt(j)) {
        string = string.split('')
        string.splice(j, 1)
        string = string.join('');
      }
    }
  }
  return string;
};