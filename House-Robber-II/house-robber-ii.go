package houserobberii

import "math"
// Adewumi Sunkanmi 2022
// 213. House Robber II
// Medium

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3


func rob(nums []int) int {
    if(len(nums)==1){
        return nums[0]
    }
    part1:= nums[0 :len(nums)-1]
    part2:= nums[1:]
    r1 := helper(part1)
    r2 := helper(part2)
    return int(math.Max(float64(r1), float64(r2)))
}


func helper(nums []int) int{
    rob1, rob2 := 0,0;
    for i:=0; i< len(nums);i++ {
        temp := int(math.Max(float64(nums[i]+ rob1), float64(rob2)))
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2
}