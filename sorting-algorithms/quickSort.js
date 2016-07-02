/*
Quick Sort Notes:
-Time Complexity:
  -Worst Case: O(n)
  -Average Case: O(nlogn)
-Performs better than merge sort in some cases because the constant factors are smaller
-Another advantage over merge sort is in-place sorting (constant space)
 */

// Psuedocode
// function takes in array, start, and end
  // if start < end
    // set the pivot (call a pivot function)
    // tail recursion on left side using start and pivot -1
    // tail recursion on right side using pivot + 1 and end
