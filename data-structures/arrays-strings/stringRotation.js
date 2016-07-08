/*
Assume you have a method isSubString which checks if one word is a substring of another.
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
call to isSubstring

input: 'waterbottle', 'erbottlewat'
output: true

Approach:
Iterate over the string and keep checking whether or not it exists in the second string.
When it's no longer in the second string, check the remainder using isSubstring.
 */

module.exports.stringRotation = function (str1, str2) {
  var results = [];

  if (str1.length !== str2.length) {
    return false;
  }

  for (var i = 0; i < str1.length; i++) {
    if (results.length > 0) {
      if (str1.indexOf(results.join('')) > -1) {
        results.push(str2.charAt(i));
      } else {
        return isSubString(str2.slice(i), str1);
      }
    } else {
      results.push(str2.charAt(i));
    }
  }
  return false;
}

function isSubString (str1, str2) {
  if (str2.indexOf(str1) > -1) {
    return true;
  }
  return false;
}