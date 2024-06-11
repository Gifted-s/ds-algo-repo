// Copyright Adewumi Sunkanmi 2022
// 22. Generate Parentheses
// Medium
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    // only add open if open is < n
    // only add close bracket if closeN < open
    // valid if closeN is === openN 
    
    let result =[]
    let stack =[]
    function backTrack (openN, closeN){
        if(openN===n && closeN===n){
            result.push(stack.join(""))
            return
        }
        if(openN< n){
            stack.push("(")
            backTrack(openN+1, closeN)
            stack.pop()
        }
        
        if(closeN< openN){
            stack.push(")")
            backTrack(openN, closeN+1)
            stack.pop()
        } 
    }
    backTrack(0,0)
    return result
};