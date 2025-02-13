package longestconsecutivesequence
func longestConsecutive(nums []int) int {
	longestStreak := 0
	numsMap := map[int]bool{}
    
	for _, num := range nums {
		numsMap[num] = true
	}

	for num := range numsMap {
		// Start only when num is the beginning of a sequence
		if !numsMap[num-1] {
			currentNum := num
			currentStreak := 1

			for numsMap[currentNum+1] {
				currentNum++
				currentStreak++
			}

			if currentStreak > longestStreak {
				longestStreak = currentStreak
			}
		}
	}

	return longestStreak
}