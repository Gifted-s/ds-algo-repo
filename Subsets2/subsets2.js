// Adewumi Sunkanmi 2022
// 78. Subsets
// Medium

// 10524

// 162

// Add to List

// Share
// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let result =[]
    function dfs(i, subset){
        if(i >= nums.length){
         result.push([...subset])
         return 
        }
        // decision to insert nums[i]
        subset.push(nums[i])
        dfs(i+1, subset)
        // decision not to insert nums[i]
        subset.pop()
        dfs(i+1, subset)
    }
    dfs(0, [])
    return result;
};