// Adewumi Sunkanmi
// 200. Number of Islands
// Medium
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    if(grid.length===0){
      return 0; 
    }
    let visited = new Set() // store visited cells
    let rows = grid.length;
    let cols = grid[0].length
    let noOfIslands = 0;
    function bfs(r,c){
        visited.add([r,c].toString())
        let queue = [[r,c]] // (r,c)
        while(queue.length >0){
            let location = queue.shift()
            r = location[0]
            c = location[1]
            let rightDir = [r,c+1]
            let downDir = [r+1, c]
            let leftDir = [r, c-1]
            let upDir = [r-1,c]
            if(rightDir[0] < rows  && rightDir[1] < cols && rightDir[1] >= 0  && rightDir[0]>= 0 && !visited.has([rightDir[0], rightDir[1]].toString()) && grid[rightDir[0]][rightDir[1]] === "1" ){
                    visited.add([rightDir[0],rightDir[1]].toString())
                    queue.push(rightDir)
                
            }
            if(downDir[0] < rows && downDir[1] < cols  && downDir[1] >= 0  && downDir[0]>= 0  && !visited.has([downDir[0], downDir[1]].toString()) && grid[downDir[0]][downDir[1]] === "1" ){
               
                    visited.add([downDir[0],downDir[1]].toString())
                    queue.push(downDir)
                
            }
            if(leftDir[0] < rows && leftDir[1] < cols && leftDir[1] >= 0  && leftDir[0]>= 0 && !visited.has([leftDir[0], leftDir[1]].toString()) && grid[leftDir[0]][leftDir[1]] === "1" ){
                
                    visited.add([leftDir[0],leftDir[1]].toString())
                    queue.push(leftDir)
                
            }
            if(upDir[0] < rows && upDir[1] < cols && upDir[1] >= 0  && upDir[0]>= 0 && !visited.has([upDir[0], upDir[1]].toString()) && grid[upDir[0]][upDir[1]] === "1" ){
                
                    visited.add([upDir[0],upDir[1]].toString())
                    queue.push(upDir)
                
            }
        }
    }
    
    for(let r = 0; r< rows; r++){
        for(let c=0; c< cols;c++){
            if(grid[r][c]==="1" && ! (visited.has([r,c].toString())) ){
                bfs(r,c)
                noOfIslands += 1
            }
        }
    }
    
    return noOfIslands
};