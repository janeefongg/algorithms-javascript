//check to see if linkedlist is a palindrome

//reverse linkedlist and compare

module.exports = (linkedlist) => {
  let reversedList = reversedClone(linkedlist);
  
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
let reverseClone = (linkedlist) => {
  let prev = null;
  let current = linkedlist;
  let temp;
  let newList = new LinkedList();
  
  while (current) {
    newList.addToTail(current.value);
    newList.next = prev;
    
    prev = newList;
    current = current.next;
  }
  
  return newList;
  
}
