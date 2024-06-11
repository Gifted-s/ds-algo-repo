package partitionequalsubsetsum
// Adewumi Sunaknmi 2022
// 416. Partition Equal Subset Sum
// Medium

// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100


func canPartition(nums []int) bool {
    dp:= map[int]int{}
    if sum(nums)%2 == 1{
        return false
    }
    dp[0]=0;
    target:= sum(nums)/2
    for i:=len(nums)-1; i>=0; i--{
        temp:= map[int]int{}
        for _, v := range dp{
            temp[v+nums[i]] = v+nums[i]
            if v+nums[i]== target{
                return true
            }
            temp[v] = v
        }
        dp = temp
        
        
    }
    return false
}

func sum (nums []int) int {
    sum:=0
    for i:=0;i<len(nums);i++{
        sum+= nums[i]
    }
    return sum
}