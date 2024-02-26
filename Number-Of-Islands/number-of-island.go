package numberofislands
// Adewumi Sunkanmi 2024
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

func numIslands(grid [][]byte) int {
	rows := len(grid)
	cols := len(grid[0])
	visited := make([][]bool, rows)
	for i := range visited {
		visited[i] = make([]bool, cols)
	}
	noOfIslands := 0

	var bfs func(r int, c int)
	bfs = func(r int, c int) {
		queue := [][]int{{r, c}} // store postion
		for len(queue) > 0 {
			queueLength := len(queue)

			for i := 0; i < queueLength; i++ {
				r := queue[i][0]
				c := queue[i][1]
				if r < 0 || c < 0 || c >= cols || r >= rows || visited[r][c] || string(grid[r][c]) == "0" {
					continue
				} else {
					queue = append(queue, []int{r + 1, c})
					queue = append(queue, []int{r - 1, c})
					queue = append(queue, []int{r, c + 1})
					queue = append(queue, []int{r, c - 1})

					visited[r][c] = true
				}

			}
			queue = queue[queueLength:]
		}
	}

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if !visited[i][j] && string(grid[i][j]) == "1" {
				noOfIslands++
				bfs(i, j)
			}
		}
	}

	return noOfIslands
}
