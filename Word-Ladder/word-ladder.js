// Adewumi Sunkanmi 2022
// 127. Word Ladder
// Hard

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)){
        return 0
    }
    
    let visited = new Set()
    let res = 1;
    let q = [beginWord]
    wordList.push(beginWord)
    visited.add(beginWord)
    let pattMap ={}
    for(let i= 0;i< wordList.length;i++){
        let word = wordList[i]
        for(let j=0; j<word.length; j++){
            let pat = word.slice(0,j) + "*" + word.slice(j+1, word.length)
            if(!pattMap[pat]){
                pattMap[pat] =[]
            }
            pattMap[pat].push(word)
        }
    }
    while (q.length !== 0){
        let size = q.length;
        for(let i=0; i< size; i++){
            let word = q.shift()
            if(word === endWord){
                return res
            }
               for(let j=0; j<word.length; j++){
                    let pat = word.slice(0,j) + "*" + word.slice(j+1, word.length)
                    for(let k=0; k<pattMap[pat].length;k++){
                        let w = pattMap[pat][k]
                        if(!visited.has(w)){
                            q.push(w)
                            visited.add(w)
                        }  
                    }
                }
        }
        res+=1;
    }
    return 0
};