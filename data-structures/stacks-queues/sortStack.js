//sort a stack such that the smallest items are at the top
//temporary stack is allowed, but you may not copy the elements into any other data structure (array)
//stack supports operations: push, pop, peek, isEmpty

var Stack = function () {
  this.storage = {};
  this.counter = 0;

};

Stack.prototype.pop = function () {
  if (this.size() > 0) {
    this.counter--;
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];

    return temp;
  }

};

Stack.prototype.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;

};

Stack.prototype.size = function () {
  return this.counter;
};

Stack.prototype.isEmpty = function () {
  if (this.size() <= 0) {
    return true;
  }
  
  return false;
};

Stack.prototype.peek = function () {
  if (this.size() >= 1) {
    return this.storage[this.counter - 1];
  } 
  
  return null;
};

//CREATE SORT STACK FUNCTION AND THEN TEST
