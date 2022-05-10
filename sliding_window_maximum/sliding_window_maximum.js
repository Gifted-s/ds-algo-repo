//Copyright Adewumi Sunkanmi 2022
// 239. Sliding Window Maximum
// Hard

// 9720

// 343

// Add to List

// Share
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let result=[]
    const queue= []
    let l =0;
    let r=0;
    while(r< nums.length){
        while(nums[queue[queue.length-1]]< nums[r] ){
            queue.pop()
        }
        queue.push(r)
        if(l>queue[0]){
            queue.shift()
        }
        if(r+1>=k){
            l++
            result.push(nums[queue[0]])
        }
        r++
    }
    
    return result
};