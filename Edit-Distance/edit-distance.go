package editdistance
// 72. Edit Distance
// Hard
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

func minDistance(word1 string, word2 string) int {
	cache := [][]int{}
	for i := 0; i < len(word1)+1; i++ {
		cache = append(cache, make([]int, len(word2)+1))
	}
	for j := 0; j < len(word2)+1; j++ {
		cache[len(word1)][j] = len(word2) - j
	}

	for i := 0; i < len(word1)+1; i++ {
		cache[i][len(word2)] = len(word1) - i
	}

	for i := len(word1) - 1; i >= 0; i-- {
		for j := len(word2) - 1; j >= 0; j-- {
			if word1[i] == word2[j] {
				cache[i][j] = cache[i+1][j+1]
			} else {
				cache[i][j] = 1 + MinOf(cache[i+1][j], cache[i][j+1], cache[i+1][j+1])
			}
		}
	}

	return cache[0][0]
}
func MinOf(vars ...int) int {
	min := vars[0]
	for _, i := range vars {
		if min > i {
			min = i
		}
	}

	return min
}
	