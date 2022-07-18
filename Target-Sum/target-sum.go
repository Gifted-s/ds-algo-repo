// Adewumi Sunkanmi 2022
package targetsum

import "strconv"

// 494. Target Sum
// Medium

// 7445

// 273

// Add to List

// Share
// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

 

// Example 1:

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3
// Example 2:

// Input: nums = [1], target = 1
// Output: 1

func findTargetSumWays(nums []int, target int) int {
    dp := map[string]int{}
    var backtrack func(i int, total int) int;
    backtrack = func(i int, total int) int {
        if i >= len(nums){
            if total== target{
                return 1
            }
            return 0; 
        }
        if val, ok :=dp[generateKey(i,total)]; ok{
            return val
        }
        dp[generateKey(i,total)] = backtrack(i+1, total + nums[i]) + backtrack(i+1, total - nums[i])
        return  dp[generateKey(i,total)]
    }
    return backtrack(0,0)
}

func generateKey(i int, t int) string {
  return strconv.Itoa(i) + "," + strconv.Itoa(t)
}