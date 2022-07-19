// Adewumi Sunkanmi 2022
package jumpgame2
import "math"
// 45. Jump Game II
// Medium

// 8771

// 317

// Add to List

// Share
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.
// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000

func jump(nums []int) int {
    res:=0
    l,r:= 0,0;
    for r<len(nums)-1{
        farthest:=0
        for i:=l; i< r+1;i++{
            farthest= int(math.Max(float64 (farthest), float64(nums[i]+i)))
        }
        l=r+1
        r=farthest
        res+=1
    }
    return res
}