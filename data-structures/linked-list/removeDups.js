// implement a function that removes duplicates from an unsorted linked list

//method 1: store into linked list. if collision, remove node
  //time complexity: O(N) time for N number of elements in list
//method 2: iterate nodes and have another iterator to find duplicates
  //time complexity: O(N2) time, but O(1) space


//method 2:
module.exports = (linkedlist) => {
  let current = linkedlist;
  
  while (current) {
    let pointer = current;
    while(pointer.next) {
      if (pointer.next.value === current.value) {
        pointer.next = pointer.next.next;
      } else {
        pointer = pointer.next;
      }
    }
    current = current.next;
  }
  
  return linkedlist;
}


