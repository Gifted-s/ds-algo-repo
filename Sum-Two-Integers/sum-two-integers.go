// Adewumi Sunkanmi 2022
package sumtwointegers
// 371. Sum of Two Integers
// Medium

// 2756

// 4067

// Add to List

// Share
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5
 

// Constraints:

// -1000 <= a, b <= 1000
// Accepted
// 316.9K
// Submissions
// 626.3K
// Seen this question in a real interview before?




func getSum(a int, b int) int {
    for b!=0{
        temp := (a&b) << 1
        a = a^b
        b = temp
    }
    return a
}