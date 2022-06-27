// Adewumi Sunkanmi
// 131. Palindrome Partitioning
// Medium
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.
// Accepted
// 473.2K
// Submissions
// 783.4K
// Seen this question in a real interview before?

/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    let result = []
    let partition =[]
    
    function dfs(i){
       if(i>= s.length){
           result.push([...partition])
           return
       }
        
       for(let j = i; j < s.length; j++){
           if(isPalindrome(s, i, j)){
               partition.push(s.slice(i,j+1))
               dfs(j+1)
               partition.pop()
           }
       }
    }
    dfs(0)
    return result
};
function isPalindrome(s, l, r){
 while(l<r){
     if(s[l]===s[r]){
         l+=1;
         r-=1;
     }else{
        return false 
     }
 }
return true
    
}