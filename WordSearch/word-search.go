package wordsearch

func exist(board [][]byte, word string) bool {
	rows := len(board)
	cols := len(board[0])
    visited := make([][]bool, rows)
    for i := range visited{
        visited[i] = make([]bool, cols)
    }

	var dfs func(r int, c int, i int) bool
	dfs = func(r int, c int, i int) bool {
		if i == len(word) {
			return true
		}
		if r < 0 ||  c < 0 || r >= rows || c >= cols || board[r][c] != word[i] || visited[r][c] {
         	return false
		}
        
		visited[r][c] = true
			
		defer func(){visited[r][c] = false}()
		return dfs(r+1, c, i+1) || dfs(r-1, c, i+1) ||
				dfs(r, c+1, i+1) || dfs(r, c-1, i+1)
	}

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if dfs(r, c, 0){
                  return true
            }
		}
	}

	return false
}

