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