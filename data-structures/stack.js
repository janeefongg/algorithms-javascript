var Stack = function () {
  this.storage = {};
  this.counter = 0;

};

Stack.prototype.pop = function () {
  if (this.size() > 0) {
    this.counter--;
    var temp = this.storage[counter];
    delete this.storage[counter];

    return temp;
  }
  
};

Stack.prototype.push = function (value) {
  this.storage[counter] = value;
  this.counter++;

};

Stack.prototype.size = function () {
  return this.counter;
};