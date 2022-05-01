// Copyright 2022, Adewumi Sunkanmi
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.


// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const hashMap = {}
    let max = 0
    for (let i of nums) {
        hashMap[i] = true
    }

    for (let key of Object.keys(hashMap)) {
        if (!(parseInt(key) - 1 in hashMap)) {
            let length = 1;
            let n = parseInt(key)
            while (n + 1 in hashMap) {
                length += 1
                n += 1
            }
            max = Math.max(length, max)
        }

    }

    return max;
};