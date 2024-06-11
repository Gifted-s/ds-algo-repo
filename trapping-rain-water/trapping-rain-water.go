package trappingrainwater

import "math"
// 42. Trapping Rain Water
// Hard
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105


func trap(height []int) int {
    
    maxLeftHeight := height[0] ;
    maxRightHeight :=height[len(height)-1];
    l:=0;
    r := len(height)-1
    sum:=0;
    for l<r{
        if maxLeftHeight <= maxRightHeight{
            l++
            heightDiff :=  maxLeftHeight - height[l]
            if(heightDiff > 0){
                sum +=heightDiff
            }
            maxLeftHeight = int(math.Max(float64(maxLeftHeight), float64(height[l])))
           
        }else{
            r--
            heightDiff :=  maxRightHeight - height[r]
            if(heightDiff > 0){
                sum +=heightDiff
            }
            maxRightHeight = int(math.Max(float64(maxRightHeight), float64(height[r])))
        }
    }
    
    return sum   
}