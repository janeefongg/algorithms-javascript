//given a circular linked list, implement a function that returns the node at the beginning of the loop
//circular linked list: a corrupt linked list in which a node's next pointer points to an earlier node
  //creates a loop

//create two pointers
//move fast pointer at rate of 2 steps, slow pointer at rate of 1 step
//when they meet up, move slow pointer to the linked list head
//keep faster pointer where it is
//move slow pointer and fast pointer at rate of 1 step
//return collision point

function linkedListCollision (linkedlist) {
  var slow = linkedlist;
  var fast = linkedlist;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      break;
    }
  }
  
  if (!fast || !fast.next) {
    return null;
  }
  
  slow = linkedlist;
  while(slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  
  return fast;
}