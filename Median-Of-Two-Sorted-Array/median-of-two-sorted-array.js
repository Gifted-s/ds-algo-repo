// Copyright Adewumi Sunkanmi 2022
// 4. Median of Two Sorted Arrays
// Hard

// 16556

// 2012

// Add to List

// Share
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let total = (nums1.length + nums2.length)
    let half = parseInt(total / 2)
    let A = nums1;
    let B = nums2;
    if (nums1.length > nums2.length) {
        A = nums2;
        B = nums1;
    }
    let l = 0;
    let r = A.length - 1
    while (true) {
        let i = parseInt((l + r) / 2)
        // this is because if r is -1, i will be -0 which can result in infinite loop if r was previously
        // 0 and the decremented by 1
        if (r === -1) {
            i = -1
        }
        let j = half - i - 2
        let ALeft = i >= 0 ? A[i] : Number.NEGATIVE_INFINITY;
        let ARight = i + 1 < A.length ? A[i + 1] : Number.POSITIVE_INFINITY;
        let BLeft = j >= 0 ? B[j] : Number.NEGATIVE_INFINITY;
        let BRight = j + 1 < B.length ? B[j + 1] : Number.POSITIVE_INFINITY;
        if (ALeft <= BRight && BLeft <= ARight) {
            // if off
            if (total % 2) {
                return Math.min(ARight, BRight)
            } else {
                return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2
            }
        } else if (ALeft > BRight) {
            r = i - 1
        } else {
            l = i + 1
        }
    }
};