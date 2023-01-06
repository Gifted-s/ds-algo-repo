package surroundedregions
// Adewumi Sunkanmi 2022
// 130. Surrounded Regions
// Medium
// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

// Example 1:


// Input: board =    [["X","X","X","X"],
                //    ["X","O","O","X"],
				//    ["X","X","O","X"],
			  //      ["X","O","X","X"]]


// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

func solve(board [][]string) {
     ROW := len(board)
	 COL := len(board[0])
	// convert all unsurrounded region to T
    var dfs  func (r,c int)
	dfs = func(r, c int) {
		if r < 0 || c< 0 || c>=COL || r>= ROW || board[r][c] == "X"  {
           return 
		}
        board[r][c] = "T"

		dfs(r + 1, c) 
        dfs(r - 1, c ) 
        dfs(r, c + 1) 
        dfs(r, c - 1)
	}
	// checkout all surrounded region to X
    for r :=0; r< ROW; r++{
		for c:=0; c< COL; c++{
			if board[r][c] != "T"{
				board[r][c] = "X"
			}
		}
	}

	// convert all T to 0
	for r :=0; r< ROW; r++{
		for c:=0; c< COL; c++{
			if board[r][c] == "T"{
				board[r][c] = "O"
			}
		}
	}

 }