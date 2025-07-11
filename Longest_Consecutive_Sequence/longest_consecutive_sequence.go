package longestconsecutivesequence

func longestConsecutiveV2(nums []int) int {
    if len(nums) == 0{
        return 0
    }

    hash := make(map[int]bool, len(nums))
    max := 1;
    for _, n := range nums{
        hash[n] = false
    }
    for _, n:= range nums{
      if  hash[n]{
        continue
      }
      if _, ok := hash[n-1]; !ok{
        start:=n
        size :=1
        hash[n]=true
        for {
            if _, ok := hash[start+1]; ok{
                size++
                start++
                hash[start] = true
            }else{
                break
            }
        }
        if size> max{
            max = size
        }
      }
    }
    
    return max
}

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
