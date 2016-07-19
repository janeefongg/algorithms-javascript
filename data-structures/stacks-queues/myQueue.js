//implement MyQueue class that implements a queue using two stacks
'use strict'

var Queue = function () {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function (value) {
    inbox.push(value);
  };

  this.dequeue = function (value) {
    var temp;
    while (inbox.size() > 0) {
      outbox.push(inbox.pop());
    };

    temp = outbox.pop();

    while (outbox.size() > 0) {
      inbox.push(outbox.pop());
    }
    return temp;
  };

  this.size = function () {
    return inbox.size();
  };
}
