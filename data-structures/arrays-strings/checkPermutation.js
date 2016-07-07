/*
Given two strings, write method to decide if one is a permutation of the other.

Notes:
-Permutation of the other if sorted string is equal to itself

 */

function checkPermutation (str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};


