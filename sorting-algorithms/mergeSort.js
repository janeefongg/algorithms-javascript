/*
Notes: 
-Fast sort algorithm, but only good for large arrays
-Time Complexity: O(nlog2n)
  -This is from the height of the tree to the number of nodes
 */

function mergeSort (array) {
    if (array.length < 2) {
        return array;
    }
    
    var mid = parseInt(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
};

function merge (left, right) {
    var results = [];
    
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
            results.push(right.shift());
        }
    }
    
    while (left.length) {
        results.push(left.shift());
        results.push(right.shift());
    }
    
    return results;
}

