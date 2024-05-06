package wordsearch

func exist(board [][]byte, word string) bool {
	rows := len(board)
	cols := len(board[0])
	visited := make([][]bool, rows)
	for i := range visited {
		visited[i] = make([]bool, cols)
	}

	var dfs func(r int, c int, i int) bool
	dfs = func(r int, c int, i int) bool {
		if i == len(word) {
			return true
		}
		if r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] != word[i] || visited[r][c] {
			return false
		}

		visited[r][c] = true

		defer func() { visited[r][c] = false }()
		return dfs(r+1, c, i+1) || dfs(r-1, c, i+1) ||
			dfs(r, c+1, i+1) || dfs(r, c-1, i+1)
	}

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if dfs(r, c, 0) {
				return true
			}
		}
	}

	return false
}

// Mon May 6 2024 Practice
// func exist(board [][]byte, word string) bool {
// 	ROW := len(board)
// 	COL := len(board[0])

// 	visit := make([][]bool, ROW)
// 	for i := range visit {
// 		visit[i] = make([]bool, COL)
// 	}
// 	var dfs func(i, r, c int) bool
// 	dfs = func(i, r, c int) bool {
// 		if i == len(word) {
// 			return true
// 		}
// 		if r < 0 || r > ROW-1 || c < 0 || c > COL-1 || visit[r][c] || board[r][c] != word[i] {
// 			return false
// 		}
// 		visit[r][c] = true
// 		defer func() { visit[r][c] = false }()
// 		return dfs(i+1, r+1, c) || dfs(i+1, r-1, c) || dfs(i+1, r, c+1) || dfs(i+1, r, c-1)
// 	}

// 	for r := 0; r < ROW; r++ {
// 		for c := 0; c < COL; c++ {
// 			if dfs(0, r, c) {
// 				return true
// 			}
// 		}
// 	}
// 	return false
// }
