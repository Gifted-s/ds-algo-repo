package containerwithmostwater

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

func maxAreaV2(height []int) int {

	max := 0
	l := 0
	r := len(height) - 1

	for l < r {
		area := 1
		if height[l] <= height[r] {
			area = height[l] * (r - l)
			l++
		} else {
			area = height[r] * (r - l)
			r--
		}
		if area > max {
			max = area
		}
	}
	return max
}

func maxArea(height []int) int {
	l := 0
	r := len(height) - 1
	maxArea := 0
	for l < r {
		area := 1
		if height[l] >= height[r] {
			area = height[r] * (r - l)
			r--
		} else {
			area = height[l] * (r - l)
			l++
		}
		if area > maxArea {
			maxArea = area
		}
	}
	return maxArea
}
