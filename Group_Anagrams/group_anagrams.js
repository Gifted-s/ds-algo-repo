// Copyright 2022, Adewumi Sunkanmi
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

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