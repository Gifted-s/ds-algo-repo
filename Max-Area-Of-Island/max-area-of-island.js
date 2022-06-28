// Adewumi Sunkanmi 2022
// 695. Max Area of Island
// Medium
// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

 

// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    
    if(grid.length===0){
     return 0; 
   }
   let maxArea =0;
   let visited = new Set() // store visited cells
   let rows = grid.length;
   let cols = grid[0].length
   function bfs(r,c){
       let area =1;
       visited.add([r,c].toString())
       let queue = [[r,c]] // (r,c)
       let i=0;
       while(queue.length >0){
           let location = queue.shift()
           r = location[0]
           c = location[1]
           let rightDir = [r,c+1]
           let downDir = [r+1, c]
           let leftDir = [r, c-1]
           let upDir = [r-1,c]
           if(rightDir[0] < rows  && rightDir[1] < cols && rightDir[1] >= 0  && rightDir[0]>= 0 && !visited.has([rightDir[0], rightDir[1]].toString()) && grid[rightDir[0]][rightDir[1]] === 1 ){
                   visited.add([rightDir[0],rightDir[1]].toString())
                   area+=1
                   queue.push(rightDir)
               
           }
           if(downDir[0] < rows && downDir[1] < cols  && downDir[1] >= 0  && downDir[0]>= 0  && !visited.has([downDir[0], downDir[1]].toString()) && grid[downDir[0]][downDir[1]] === 1 ){
                   area+=1
                   visited.add([downDir[0],downDir[1]].toString())
               
                   queue.push(downDir)
               
           }
           if(leftDir[0] < rows && leftDir[1] < cols && leftDir[1] >= 0  && leftDir[0]>= 0 && !visited.has([leftDir[0], leftDir[1]].toString()) && grid[leftDir[0]][leftDir[1]] === 1 ){
                   area+=1
                   visited.add([leftDir[0],leftDir[1]].toString())
               
                   queue.push(leftDir)
               
           }
           if(upDir[0] < rows && upDir[1] < cols && upDir[1] >= 0  && upDir[0]>= 0 && !visited.has([upDir[0], upDir[1]].toString()) && grid[upDir[0]][upDir[1]] === 1 ){
                   area+=1
                   visited.add([upDir[0],upDir[1]].toString())
                   queue.push(upDir)
               
           }
       }
      
       return area
   }
   
   for(let r = 0; r< rows; r++){
       for(let c=0; c< cols;c++){
           if(grid[r][c]===1 && ! (visited.has([r,c].toString())) ){
              let area =  bfs(r,c)
              maxArea = Math.max(maxArea, area)
           }
       }
   }
   
   return maxArea
};