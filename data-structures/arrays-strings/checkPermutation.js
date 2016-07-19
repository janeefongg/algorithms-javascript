/*
Given two strings, write method to decide if one is a permutation of the other.

Notes:
-Permutation of the other if sorted string is equal to itself

 */

//TODO: check for edge cases -> spaces and caps?
// module.exports.checkPermutation = function (str1, str2) {
//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// };

'use strict'

module.exports = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');