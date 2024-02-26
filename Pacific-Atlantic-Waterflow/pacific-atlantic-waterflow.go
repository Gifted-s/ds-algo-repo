package pacificatlanticwaterflow

// Adewumi Sunkanmi 2024
// 417. Pacific Atlantic Water Flow
// Medium
// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// Example 1:

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Example 2:

// Input: heights = [[2,1],[1,2]]
// Output: [[0,0],[0,1],[1,0],[1,1]]

// Constraints:

// m == heights.length
// n == heights[r].length
// 1 <= m, n <= 200
// 0 <= heights[r][c] <= 105

func pacificAtlantic(heights [][]int) [][]int {
	ROWS := len(heights)
	COLS := len(heights[0])
	atl := make([][]bool, ROWS)
	pac := make([][]bool, ROWS)
	result := [][]int{}
	for i := range atl {
		atl[i] = make([]bool, COLS)
		pac[i] = make([]bool, COLS)
	}

	var dfs func(r int, c int, visited [][]bool, prevHeight int)
	dfs = func(r int, c int, visited [][]bool, prevHeight int) {
		if r < 0 || c < 0 || r >= ROWS || c >= COLS || visited[r][c] || prevHeight > heights[r][c] {
			return
		}
		visited[r][c] = true
		dfs(r+1, c, visited, heights[r][c])
		dfs(r-1, c, visited, heights[r][c])
		dfs(r, c+1, visited, heights[r][c])
		dfs(r, c-1, visited, heights[r][c])
	}

	for r := 0; r < ROWS; r++ {
		dfs(r, 0, pac, heights[r][0])
		dfs(r, COLS-1, atl, heights[r][COLS-1])
	}

	for c := 0; c < COLS; c++ {
		dfs(0, c, pac, heights[0][c])
		dfs(ROWS-1, c, atl, heights[ROWS-1][c])
	}

	for r := 0; r < ROWS; r++ {
		for c := 0; c < COLS; c++ {
			if atl[r][c] && pac[r][c] {
				result = append(result, []int{r, c})
			}
		}
	}

	return result

}
