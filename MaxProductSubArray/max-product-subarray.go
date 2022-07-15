package maxproductsubarray
import "math"
// Adewumi Sunkanmi 2022
// 152. Maximum Product Subarray
// Medium

// 12511

// 376

// Add to List

// Share
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


func maxProduct(nums []int) int {
    /**
 * @param {number[]} nums
 * @return {number}
 */
    _,max := findMinAndMax(nums)
    res := max
    curMax := 1
    curMin:= 1
    
    for i:=0;i< len(nums); i++{
        n:= nums[i]
        if n==0 {
             curMax = 1
             curMin = 1
             continue
        }
        temp := n * curMax
        curMax = maxVal(n * curMax, n * curMin, n) 
        curMin = minVal(temp, n*curMin, n)
        res = int(math.Max(float64(res), float64(curMax)))
    }
    return  res
};

func maxVal(a int,b int ,c int) int{
    max:= a
    if (a>=b && a>=c) {
        max=a
    }
    if (b>=a && b>=c){
        max=b
    }
    if (c>=a && c>=b) {
       max=c
    }
    return max
}

func minVal(a int,b int,c int) int {
    min:= a
    if (a<=b && a<=c) {
        min=a
    }
    if (b<=a && b<=c){
        min=b
    }
    if (c<=a && c<=b) {
       min=c
    }
    return min
}



func findMinAndMax(a []int) (min int, max int) {
	min = a[0]
	max = a[0]
	for _, value := range a {
		if value < min {
			min = value
		}
		if value > max {
			max = value
		}
	}
	return min, max
}
