//Adewumi Sunkanmi 2022
package longestcommonsubsequence


import "math"

// 1143. Longest Common Subsequence
// Medium

// 7345

// 83

// Add to List

// Share
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
 
func longestCommonSubsequence(text1 string, text2 string) int {
    dp:=[][]int{}
    
    for i:=0;i< len(text1)+1; i++{
        tempRow:= []int{}
        for j:=0;j< len(text2)+1;j++{
            tempRow = append(tempRow, 0)
        }
        dp=append(dp, tempRow)
    }
    
    for i:=len(text1)-1;i>=0; i--{
         for j:=len(text2)-1;j>=0; j-- {
             if text1[i]==text2[j]{
                 dp[i][j] = 1+dp[i+1][j+1];
             }else{
                 dp[i][j]=int(math.Max(float64(dp[i+1][j]), float64(dp[i][j+1])))
             }
         }
    }
    return dp[0][0]
}