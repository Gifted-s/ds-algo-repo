// Copyright 2022, Adewumi Sunkanmi
// Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

var isValidSudoku = function (board) {
    const rowsMap = {}
    const colsMap = {}
    const squareMap = {}

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === ".") {
                continue
            }
            if (alreadyExistInRow(rowsMap, row, col, board) ||
                alreadyExistInCol(colsMap, row, col, board) ||
                alreadyExistInSquareMatrix(squareMap, row, col, board)
            ) {
                return false
            }
            rowsMap[row] = rowsMap[row] ? [...rowsMap[row], board[row][col]] : [board[row][col]];
            colsMap[col] = colsMap[col] ? [...colsMap[col], board[row][col]] : [board[row][col]];
            squareMap[[Math.floor(row / 3), Math.floor(col / 3)]] = squareMap[[Math.floor(row / 3), Math.floor(col / 3)]] ? [...squareMap[[Math.floor(row / 3), Math.floor(col / 3)]], board[row][col]] : [board[row][col]]
        }
    }
    return true
};


function alreadyExistInRow(rowsMap, row, col, board) {
    const exist = rowsMap[row] ? rowsMap[row].includes(board[row][col]) : false
    return exist;
}


function alreadyExistInCol(colsMap, row, col, board) {
    const exist = colsMap[col] ? colsMap[col].includes(board[row][col]) : false
    return exist;
}

function alreadyExistInSquareMatrix(squareMap, row, col, board) {
    const exist = squareMap[[Math.floor(row / 3), Math.floor(col / 3)]] ? squareMap[[Math.floor(row / 3), Math.floor(col / 3)]].includes(board[row][col]) : false
    return exist;
}


