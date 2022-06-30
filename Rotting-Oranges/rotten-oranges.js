// Adewumi Sunkanmi 2022
// 994. Rotting Oranges
// Medium
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

// Example 1:


// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.
// Accepted
// 413.8K
// Submissions
// 797K
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    const ROW = grid.length;
    const COL = grid[0].length
    let time = 0;
    let fresh = 0;
    let queue = []// initially holds the position of the rotten oranges
    
    for(let r =0; r<ROW; r++){
        for(let c =0; c< COL; c++){
            if(grid[r][c]===2){
                queue.push([r,c])
            }
            if(grid[r][c]===1){
                fresh+=1;
            }
        }
    }

    while(queue.length>0 && fresh>0){
        const size = queue.length;
        for(let i=0; i<size;i++){
            let position  = queue.shift()
            let r = position[0]
            let c = position[1]
            let right = [r,c+1]
            let left = [r,c-1]
            let up = [r-1,c]
            let down = [r+1,c]
            if(right[0]>=0 && right[1]>=0 && right[0]<ROW && right[1]<COL && grid[right[0]][right[1]] ===1){
              grid[right[0]][right[1]]=2;
              fresh-=1
              queue.push([right[0],right[1]])
            }
            if(left[0]>=0 && left[1]>=0&& left[0]<ROW && left[1]<COL && grid[left[0]][left[1]] ===1){
              grid[left[0]][left[1]]=2;
              fresh-=1
              queue.push([left[0],left[1]])
            }
            
            if(up[0]>=0 && up[1]>=0 && up[0]<ROW && up[1]<COL && grid[up[0]][up[1]] ===1){
              grid[up[0]][up[1]]=2;
              fresh-=1
              queue.push([up[0],up[1]])
            }
            
            
            if(down[0]>=0 && down[1]>=0 && down[0]<ROW && down[1]<COL && grid[down[0]][down[1]] ===1){
              grid[down[0]][down[1]]=2;
              fresh-=1
              queue.push([down[0],down[1]])
            }
           
        }
        if (queue.length > 0) time++;
    }
    
    return fresh>0 ? -1: time
};