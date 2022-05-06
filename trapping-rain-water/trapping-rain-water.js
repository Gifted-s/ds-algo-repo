// Copyright Adewumi Sunkanmi 2022
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.



// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length === 0 || !height) {
        return 0
    }
    let maxLeft = height[0];
    let maxRight = height[height.length - 1]
    let l = 0;
    let r = height.length - 1
    let sum = 0;
    while (l < r) {
        // check for the minimum between max left  and max right r i.e min(l, r)
        let minHeight = Math.min(maxRight, maxLeft)
        // min - height
        if (maxLeft < maxRight) {
            l++
            let diff = minHeight - height[l]
            if (diff > 0) {
                sum += diff
            }
            if (height[l] > maxLeft) {
                maxLeft = height[l]
            }
        } else {
            r--
            let diff = minHeight - height[r]
            if (diff > 0) {
                sum += diff
            }
            if (height[r] > maxRight) {
                maxRight = height[r]
            }
        }


    }

    return sum
};