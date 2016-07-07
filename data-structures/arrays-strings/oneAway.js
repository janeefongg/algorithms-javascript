/*
There are three types of edits that can be performed on strings: 
  insert a character
  remove a character
  replace a character
 
Given two strings, write a function to check if they are one edit (or zero edits) away.
 */

//check if second input length is smaller than the other
//if it is, find the letter and its index
//splice it into the second input
//compare
//if first input is smaller than the second input
//find the extra letter and its index
//splice into the first input
//compare
//if lengths are equal
//iterate through and count the differences
//if difference count is greater than 1, return false

module.exports.oneAway = function (input1, input2) {

  if (input1.length === input2.length + 1) {
    //insertion
    return oneEditInsert(input1, input2);
  } else if (input1.length + 1 === input2.length) {
    //remove
    return oneEditRemove(input1, input2);
  } else if (input1.length === input2.length) {
    return compareSameLength(input1, input2);
   }
};

function oneEditRemove (input1, input2) {
  var index;
  var updatedInput;

  for (var i = 0; i < input2.length; i++) {
    if (input2.charAt(i) !== input1.charAt(i)) {
      index = i;
      break;
    }
  }

  updatedInput = input1.split('');
  updatedInput.splice(index, 0, input2.charAt(index));

  return updatedInput.join('') === input2;
};

function oneEditInsert (input1, input2) {
  var index;
  var updatedInput;

  for (var i = 0; i < input1.length; i++) {
    if (input1.charAt(i) !== input2.charAt(i)) {
      index = i;
      break;
    }
  }

  updatedInput = input2.split('');
  updatedInput.splice(index, 0, input1.charAt(index));

  return updatedInput.join('') === input1;
};

function compareSameLength (input1, input2) {
  var differences = 0;

  for (var i = 0; i < input1.length; i++) {
    if (input1.charAt(i) !== input2.charAt(i)) {
      differences++;
    }
  }

  return differences === 1;
};
