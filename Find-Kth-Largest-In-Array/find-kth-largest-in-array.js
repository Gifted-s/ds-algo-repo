// Adewumi Sunkannmi 2022
// 215. Kth Largest Element in an Array
// Medium
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 104
// -104 <= nums[i] <= 104
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    k = nums.length-k

   function quickSort(l, r){
      let p = l;
      let pivot = nums[r] // last number by right
      
      for( let i = l; i< r; i++){
          if(nums[i] <= pivot){
              let temp = nums[i]
              nums[i] = nums[p]
              nums[p] = temp
              p+=1
          }
      }
      let temp = nums[r]
      nums[r]= nums[p]
      nums[p]= temp
      if(k<p){
        return quickSort(l, p-1)
      }else if(k>p){
          return quickSort(p+1, r)
      }else{
          return nums[p]
      }
   }
   return  quickSort(0, nums.length-1)
    
};


