// Adewumi Sunkanmi
// 79. Word Search
// Medium
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 

// Follow up: Could you use search pruning to make your solution faster with a larger board?

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let ROWS=board.length;
    let COLS =  board[0].length;
    let path = new Set()
    function dfs(r,c,i){
        if(i === word.length){
            return true
        }
        if(r<0 || 
           c<0  ||
           r>= ROWS ||
           c >= COLS ||
           word[i] !== board[r][c] ||
           path.has([r,c].toString())
          ){
            return false
        }
        // stringify this path because JavaScript Set will only store the memory address of array therefore you won't be able to get it back so stringify it to make it a string.  
        path.add([r,c].toString())
       let result = (
                    dfs(r-1,c, i+1) ||
                    dfs(r+1,c, i+1) ||
                    dfs(r, c-1, i+1) ||
                    dfs(r, c+1, i+1)
                   )
       path.delete([r,c].toString())
       return result
    }
       
    for(let r =0; r< ROWS; r++){
        for(let c=0; c< COLS; c++){
            if(dfs(r,c,0)){
                return true
            }
        }
    }
       return false;
   };