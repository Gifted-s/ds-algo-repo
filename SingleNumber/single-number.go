package singlenumber

// 136. Single Number
// Easy

// 10596

// 398

// Add to List

// Share
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

func singleNumber(nums []int) int {
    res:=0;
    
    for i:=0;i < len(nums);i++{
        res = nums[i] ^ res
    }
    return res
}