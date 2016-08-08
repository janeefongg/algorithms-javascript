/*
Find the lowest common ancestor of a binary search tree
 */

module.exports = function (tree, int1, int2) {
  while (tree !== null) {
    if (tree.value > int1 && tree.value > int2) {
      tree = tree.left;
    } else if (tree.value < int1 && tree.value < int2) {
      tree = tree.right;
    } else {
      break;
    }
  }

  return tree;

}