// 72. Edit Distance
// Hard
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
 

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    let cache = []
    for (let i=0; i< word1.length+1; i++){
        cache.push(new Array(word2.length+1))
    }
    for (let j=0; j<word2.length+1; j++){
        cache[word1.length][j] = word2.length-j 
    }
    for (let i=0; i<word1.length+1; i++){
        cache[i][word2.length] = word1.length-i
    }
    for (let i=word1.length-1; i>=0; i--){
       for (let j=word2.length-1; j>=0; j--){
        if(word1[i]=== word2[j]){
            cache[i][j]=cache[i+1][j+1]
        }else{
            cache[i][j]= 1 + Math.min(cache[i+1][j],cache[i][j+1], cache[i+1][j+1] )
        }
    } 
    }
    return cache[0][0];
};