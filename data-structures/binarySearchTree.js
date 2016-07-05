/*
A binary tree where the left child is lesser than the parent and the right child is greater than the parent
 */

var BinarySearchTree = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value) {
        if (this.left === null) {
            this.left = BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
    } else if (value > this.value) {
        if (this.right === null) {
            this.right = BinarySearchTree(value);
        } else {
            this.right.insert(value);
        }
    }
};

BinarySearchTree.prototype.contains = function (value) {
    if (this.value === value) {
        return true;
    } else if (value < this.value) {
        if (!this.left) {
            return false;
        } else {
            return this.left.contains(value);
        }
    } else if (value > this.value) {
        if (!this.right) {
            return false;
        } else {
            return this.right.contains(value);
        }
    }
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
    callback(this.value);
    if (this.left) {
        this.left.depthFirstLog(callback);
    }
    
    if (this.right) {
        this.right.depthFirstLog(callback);
    }
};