// Copyright 2022 Adewumi Sunkanmi
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1)
    let prefix= 1;
    for (let i=0; i<nums.length;i++){
        result[i] = prefix;
        prefix *=nums[i]
    }
      
    let postfix=1;
    for(let j=nums.length-1; j>=0;j--){
        result[j] *= postfix;
        postfix *= nums[j]
    }
   return result;
  };