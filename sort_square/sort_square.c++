// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// SOLN
// class Solution {
// public:
//     vector<int> sortedSquares(vector<int>& nums) {
//         vector<int>a(nums.size(),0);
//         int left=0;
//         int right = nums.size()-1;
//         //-4,-1,0,3,10
//         //   0  1  9  16  100
//         for(int i=nums.size()-1;i>=0;i--){
//             if(abs(nums[left])>nums[right]){
//                 a[i]= nums[left]*nums[left];
//                 left++;
//             }else{
//                 a[i]=nums[right]*nums[right];
//                 right--;
//             }
//         }
//         return a;
//     }
// };

