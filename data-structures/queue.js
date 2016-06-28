var LinkedList = function () {
  var list = {};
  
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    var newNode = new Node (value);

    if (!list.head) {
      list.head = newNode;
    }

    if (list.tail) {
      list.tail.next = newTail;
    }

    list.tail = newTail;

  };
  
  list.removeHead = function () {
    if (!list.head) {
      return null;
    }

    var currentHead = list.head;
    list.head = list.head.next;

    return currentHead.value;
  };

  list.contains = function (target) {
    var current = list.head;

    while (current) {

      if (current.value === target) {
        return true;
      }

      current = current.next;
    }

    return false;
  };

};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

