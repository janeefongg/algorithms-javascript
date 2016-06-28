var Queue = function () {
  this.storage = {};
  this.counter = 0;
  this.start = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;

};

Queue.prototyope.dequeue = function () {
  if (this.size() > 0) {
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;

    return temp;
  }
};

Queue.prototype.size = function () {
  return this.counter - this.start;
};