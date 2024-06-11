// Copyright Adewumi Sunkanmi 2022
// 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const result = []
    nums=nums.sort((a,b)=> a-b)
    for (let i=0; i<nums.length; i++){
        let current = nums[i]
        if(i !== 0 && nums[i-1] === current){
            continue
        }
        let left = i+1
        let right= nums.length-1;
        while(left < right){
            const threeSum = current + nums[left] + nums[right]
            if(threeSum >0){
                right--
            }
            else if(threeSum <0){
                left++
            }
            else{
            result.push([current, nums[left], nums[right]])
            left++
                while(nums[left] === nums[left-1] && left< right){
                    left ++
                }
            }
           
        }
    }
     return result
 };