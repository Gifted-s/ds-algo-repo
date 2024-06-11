// Copyright Adewumi Sunkanmi 2022
// 76. Minimum Window Substring
// Hard
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?



/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    if(s.length> Math.pow(10,5) || t.length> Math.pow(10,5)){
        return ""
    }
    if(t===s){
        return s
    }
    if(t===""){
        return ""
    }
    const charMap ={}
    const window = {}
    for(let i = 0; i< t.length; i++){
        let char = t[i]
        charMap[char] =  charMap[char]? charMap[char]+1: 1 
    }
    
    let res = [-1,-1]
    let resLength = Math.pow(10, 1000)
    let l = 0;
    let need = Object.keys(charMap).length;
    let have = 0;
    for(let r= 0; r<s.length; r++){
        let char = s[r]
        window[char] = window[char]? window[char]+1: 1
        if(char in charMap && window[char] === charMap[char]){
            have++
        }
        while(have===need){
                if((r-l+1)< resLength){
                    res=[l,r]
                    resLength= r-l+1
                }
                window[s[l]] -=1
                if(s[l] in charMap &&  window[s[l]]< charMap[s[l]] ){
                    have--
                }
        l++  
        }
    }
    let finalString=""
    if(resLength !== Math.pow(10, 1000)){
        
       finalString = s.slice(res[0], res[1]+1)
    }
    return finalString  
    
};