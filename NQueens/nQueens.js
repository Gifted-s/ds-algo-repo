// Adewumi Sunkanmi 2022
// 51. N-Queens
// Hard
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

// Example 1:


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]

/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    let columns = new Set()
    let posDiagonals = new Set()
    let negDiagonals = new Set()
    let result =[]
    let board =[]
    
    for(let r = 0; r< n ;r++){
      for(let c = 0; c< n ;c++){
        if(!board[r]){
            board[r] = ["."]
            continue
        }
        board[r].push(".") 
      } 
    }
    function backtrack(r){
       if(r == n){
          let copy =[]
          for (let row of board){
              copy.push(row.join(""))
          }
          result.push([...copy])
          return
       } 
       for(let c = 0; c< n ;c++){
        if(columns.has(c) || posDiagonals.has(r+c) || negDiagonals.has(r-c)){
            continue
        }
        columns.add(c)
        posDiagonals.add(r+c)
        negDiagonals.add(r-c)
        board[r][c]  = "Q"
           
        backtrack(r+1)
           
        columns.delete(c)
        posDiagonals.delete(r+c)
        negDiagonals.delete(r-c)
        board[r][c]  = "."
      }   
    }
    
    backtrack(0)
    
    return result;
};