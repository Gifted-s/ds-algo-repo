// Adewumi Sunkanmi 2022
package maxsubarray

import "math"
// 53. Maximum Subarray
// Medium
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

func maxSubArray(nums []int) int {
    maxSub := nums[0]
    curSum := 0
    
    for i:=0;i< len(nums);i++{
        if curSum < 0 {
            curSum = 0
        }
        curSum = curSum + nums[i]
        maxSub = int(math.Max(float64(curSum),float64(maxSub)))
    }
    return maxSub
}