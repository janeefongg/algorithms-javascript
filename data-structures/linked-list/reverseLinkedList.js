/*
Given the head of a linked list, implement an algorithm that reverses the order of the list and returns new head
 */

module.exports = (head) => {
  let prev = null;
  let current = head;
  let temp;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;

    current = temp;
  }

  return prev;
}