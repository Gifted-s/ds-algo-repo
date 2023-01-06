package rottingoranges
import (
	"strconv"
)
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


// Input: grid = [[2,1,1],
//                [1,1,0],
//				  [0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 
func rottenOrange(grid [][]int)int{
  ROW, COL := len(grid), len(grid[0])
  time:= 0;
  queue := [][]int{}
  fresh:= 0

  // get fresh oranges count and add all rotten oranges positions to the queue
      for r:=0; r< ROW; r++{
		for c:=0; c< COL; c++{
		   if grid[r][c] == 2{
			queue = append(queue, []int{r,c})
		   }
		   if grid[r][c] == 1{
			fresh++
		   }
		}
	  }
// perform bfs to rotten unrotten positions :)
	  for len(queue) >0 && fresh>0{
		length := len(queue)
        for i:=0; i< length;i++{
			pos := queue[len(queue)-1]
			queue = queue[:len(queue)-1]
			row:= pos[0]
			col:= pos[1]
            dir := [][]int{{1,0}, {-1,0}, {0,1}, {0,-1}}
   
			for i:=0; i< len(dir); i++{
				row =  row + dir[i][0]
				col =  col + dir[i][1]
                if  row >=0 && col>=0 && col < COL && row < ROW && grid[row][col] != 0 &&  grid[row][col] != 2 { 
                 grid[row][col] = 2
				 fresh--
				 queue = append(queue, []int{row,col})
				}
			}
		}
		if len(queue)>0{
		  time++
		}
	
	  }

	  if fresh >0{
		return -1
	  }

	  return time

}

func convertKeyToString(i1,i2 int)string{
	return strconv.Itoa(i1) + "," + strconv.Itoa(i2)
}
