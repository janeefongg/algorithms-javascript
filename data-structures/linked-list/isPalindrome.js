//check to see if linkedlist is a palindrome

//reverse linkedlist and compare

function isPalindrome (linkedlist) {
  var reversedList = reversedClone(linkedlist);
  
  while (linkedlist && reversedList) {
    if (linkedlist.value !== reversedList.value) {
      return false;
    }
    
    linkedlist = linkedlist.next;
    reversedList = reversedList.next;
  }
  
  //cannot just return true because one linked list might be longer than the other
  return linkedlist === null && reversedList === null;
}

//helper function
function reverseClone (linkedlist) {
  var prev = null;
  var current = linkedlist;
  var temp;
  var newList = new LinkedList();
  
  while (current) {
    newList.addToTail(current.value);
    newList.next = prev;
    
    prev = newList;
    current = current.next;
  }
  
  return newList;
  
}
