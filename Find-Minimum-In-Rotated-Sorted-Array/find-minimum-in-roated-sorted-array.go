package findminimuminrotatedsortedarray

// Adewumi Sunkanmi 2024
// 153. Find Minimum in Rotated Sorted Array
// Medium

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

// Constraints:

// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

import "math"

func findMin(nums []int) int {
	l := 0
	r := len(nums) - 1
	result := nums[0]

	for l <= r {
		// This means we are already in a sorted portion
		if nums[l] < nums[r] {
			result = int(math.Min(float64(nums[l]), float64(result)))
			break
		}

		//check which portion we are
		m := (l + r) / 2
		result = int(math.Min(float64(nums[m]), float64(result)))

		// are we in the left sorted portion?
		if nums[m] >= nums[l] {
			l = m + 1
		} else { // are we in the right sorted portion?
			r = m - 1
		}
	}
	return result
}
