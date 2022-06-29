// Adewumi Sunkanmi 2022
// 130. Surrounded Regions
// Medium
// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

// Example 1:


// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

 var solve = function(board) {
    
    let ROW = board.length;
    let COL = board[0].length;
    
    function capture(r,c){
        if(r<0|| c<0 || r=== ROW || c===COL || board[r][c] !== "O"){
            return
        }
        board[r][c] ="T"
        capture(r+1, c)
        capture(r-1, c)
        capture(r, c+1)
        capture(r, c-1)
    }
    //capture unsurounded region
    for(let r=0; r<ROW; r++){
         for(let c=0; c<COL; c++){
              if(board[r][c]=== "O" &&  ([0,ROW-1].includes(r) || [0,COL-1].includes(c))){
               capture(r,c)
              }
         }
    }
    //capture surrounded rejoin 
     for(let r=0; r<ROW; r++){
         for(let c=0; c<COL; c++){
              if(board[r][c]=== "O"){
               board[r][c] ="X" 
              }
         }
    }
    
    //uncapture unsurounded rejoin
     for(let r=0; r<ROW; r++){
         for(let c=0; c<COL; c++){
              if(board[r][c]=== "T"){
               board[r][c] ="O" 
              }
         }
    }


    
};