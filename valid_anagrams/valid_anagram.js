// Copyright 2022, Adewumi Sunkanmi
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    const stringMap= {}
    for(let i of s){
      if(stringMap[i]){
         stringMap[i] += 1
      }
      else{
           stringMap[i] = 1
      }
    }
    
    for(let i of t){
        if(stringMap[i]){
            stringMap[i] -= 1
        }
        else{
            return false
        }
    }
  return true
};