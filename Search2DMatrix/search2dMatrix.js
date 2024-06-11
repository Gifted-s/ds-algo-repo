// Adewumi Sunkanmi 2022
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.


// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let ROWS = matrix.length;
    let top = 0;
    let bottom = ROWS - 1

    while (top <= bottom) {
        let row = parseInt((top + bottom) / 2);
        if (matrix[row][matrix[row].length - 1] < target) {
            top = row + 1
        } else if (matrix[row][0] > target) {
            bottom = row - 1
        } else {
            break
        }
    }

    if (top > bottom) {
        return false
    }
    let row = parseInt((top + bottom) / 2);
    let found = binarySearch(matrix[row], target)
    if (found === -1) {
        return false
    }
    return true
};



var binarySearch = function (nums, target) {
    let l = 0;
    let r = nums.length - 1

    while (l <= r) {
        let mid = parseInt((l + r) / 2)
        if (nums[mid] < target) {
            l = mid + 1
        }
        else if (nums[mid] > target) {
            r = mid - 1
        }
        else {
            return mid
        }
    }
    return -1
};