// Copyright Adewumi Sunkanmi 2022
// 84. Largest Rectangle in Histogram
// Hard

// 9871

// 146

// Add to List

// Share
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.



// Example 1:


// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:


// Input: heights = [2,4]
// Output: 4


// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104


/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const stack = []// store pair [index, height]
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        let start = i;
        while (stack.length >= 1 && stack[stack.length - 1][1] > heights[i]) {
            const [index, height] = stack.pop()
            maxArea = Math.max(maxArea, height * (i - index))
            start = index// shift start to left by one step
        }
        stack.push([start, heights[i]])
    }
    for (let i of stack) {
        maxArea = Math.max(maxArea, i[1] * (heights.length - i[0]))

    }
    return maxArea
};

