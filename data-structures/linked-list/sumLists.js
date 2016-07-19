/*
You have two numbers represented by a linked list, where each node contains a single digit. 
The digits are stored in reverse order, such that the 1's digit is at the head of the list.
Write a function that adds the two numbers and returns the sum as a linked list.

Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
Output: 2 -> 1 -> 9. That is, 912.

Assume or linked list node looks like this:
{value: ___, next: ____}

FOLLOW UP:
Suppose the digits are stored in forward order. Repeat the above problem.
 */

'use strict'

module.exports = (list1, list2) => {
  let num1 = [];
  let num2 = [];
  let sum;
  let current1 = list1;
  let current2 = list2;
  let newList = new LinkedList();

  while (current1) {
    num1.push(current1.value);
    current1 = current1.next;
  }

  while (current2) {
    num2.push(current2.value);
    current2 = current2.next;
  }

  sum = (parseInt(num1.join('')) + parseInt(num2.join(''))).toString().split('');

  while (sum.length > 0) {
    newList.addToTail(sum.pop());
  }
  
  return newList;

};