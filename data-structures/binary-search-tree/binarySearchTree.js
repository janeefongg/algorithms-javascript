/*
A binary tree where the left child is lesser than the parent and the right child is greater than the parent
 */

/*
Methods:
-Insert
-Contains
-DepthFirstLog
-minHeight
-maxHeight
-isBalanced
-isValid
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

BinarySearchTree.prototype.minHeight = function (node) {
  if (!node || !node.value) {
    return 0;
  }

  return 1 + Math.min(this.minHeight(node.left), this.minHeight(node.right));
};

BinarySearchTree.prototype.maxHeight = function (node) {
  if (!node || node.value) {
    return 0;
  }

  return 1 + Math.max(this.maxHeight(node.left), this.maxHeight(node.right));
};

BinarySearchTree.prototype.isBalanced = function (root) {
  if (!root || !root.value) {
    return true;
  }

  return this.maxHeight(root) - this.minHeight(root) <= 1;
};

BinarySearchTree.prototype.isValid = function (root, min, max) {
  if (root.value === null) {
    return true;
  }
  
  if (root.value > min && root.value < max
      && this.isValid(root.left, min, root.value)
      && this.isValid(root.right, root.value, max)) {
    return true;
  } else {
    return false;
  }
};