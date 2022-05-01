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
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length == 1 && strs[0] === "") {
        return [[""]]
    }
    else {
        if (strs.length == 1) {
            return [[strs[0]]]
        }
    }

    const resultMap = {}
    for (let str of strs) {
        const hash = new Array(26).fill(0)
        const current = str.split("")
        for (let k of current) {
            hash[k.charCodeAt(0) - "a".charCodeAt(0)] += 1
        }
        if (resultMap[hash]) {
            resultMap[hash].push(str)
        }
        else {
            resultMap[hash] = [str]
        }
    }

    return Object.values(resultMap)
};




