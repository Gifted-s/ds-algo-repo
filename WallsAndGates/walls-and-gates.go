package wallsandgates
import "strconv"
// Adewumi Sunkanmi 2022

// Description
// You are given a m x n 2D grid initialized with these three possible values.

// -1 - A wall or an obstacle.
// 0 - A gate.
// INF - Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a Gate, that room should remain filled with INF


func wallsAndGate(grid [][]int){
  ROW := len(grid)
  COL := len(grid[0])
  queue := [][]int{}
  visit := map[string]bool{}// keep track of visited rooms
  dist := 0

  for r:=0; r< ROW; r++{
	for c :=0; c<COL;c++{
		if grid[r][c] == 0{
			queue = append(queue, []int{r,c})
		}
	}
  }

  for len(queue)>0{
	queueLength:= len(queue)
	for i:=0; i<queueLength; i++{
		pos:= queue[len(queue)-1]
	    queue = queue[: len(queue)-1]
		row := pos[0]
		col := pos[1]
		dirs := [][]int{{1,0}, {-1,0}, {0,1}, {0,-1}}
		dist+=1
		for dir :=0; dir < len(dirs); dir++{
			r := row + dirs[dir][0]
			c := col + dirs[dir][1]
			if _, ok := visit[convertKeyToString(r,c)]; !ok && r >=0 && c>= 0 && c< COL && r < ROW && grid[r][c] != -1{
				grid[r][c] = dist
				visit[convertKeyToString(r,c)] = true
				queue = append(queue, []int{r,c} )
			}
		}
	}
  }

}

func convertKeyToString(i1,i2 int)string{
    return strconv.Itoa(i1) + "," + strconv.Itoa(i2)
}

