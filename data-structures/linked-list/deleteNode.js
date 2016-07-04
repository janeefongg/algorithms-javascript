// implement an algorithm that deletes a node in the middle of array, given only access to that node

//input: node c, a->b->c->d->e->f
//result: new list looks like a->b->d->e->f

//we do not have access to the head, only the node to be deleted.
//copy the data from the next node over to the current node, then delete the next node

//example: c's value will become d. c's next will be d's next
//Note: this problem cannot be solved if the node to be deleted is the last node in the linked list

function deleteNode (node) {
  
  if (!node.value || !node.next) {
    return false;
  }
  
  var nextNode = node.next;
  node.value = nextNode.value;
  node.next = nextNode.next;
  
  return true;
}