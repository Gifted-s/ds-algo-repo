// Copyright Adewumi Sunkanmi 2022
// 3. Longest Substring Without Repeating Characters
// Medium

// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length==0){
        return ""
    }
    let left =0
    let result = 0;
    let charMap = {}
     for (let r=0; r < s.length; r++ ){
         while(charMap[s[r]]){
             delete charMap[s[left]]
             left++
         }
         charMap[s[r]] = true
         result = Math.max(result, (r-left)+1)
     }
 return result
};