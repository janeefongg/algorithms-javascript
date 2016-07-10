/*
Given the head of a linked list, implement an algorithm that reverses the order of the list and returns new head
 */

function reverseList (head) {
  var prev = null;
  var current = head;
  var temp;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;

    current = temp;
  }

  return prev;
}