//implement an algorithm that searches through a sorted array for a target
//if target found, return index. else return -1

module.exports.binarySearchArray = function (array, target) {
    var min = 0;
    var max = array.length - 1;
    var mid;

    while (min <= max) {
        mid = Math.floor((min + max) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (target < array[mid]) {
            max = mid - 1;
        } else if (target > array[mid]) {
            min = mid + 1;
        }
    }

    return -1;
};