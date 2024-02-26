package containsduplicate

func containsDuplicate(nums []int) bool {

	countOccurenceMap := map[int]bool{}
	for i := range nums {
		if countOccurenceMap[nums[i]] {
			return true
		} else {
			countOccurenceMap[nums[i]] = true
		}
	}
	return false
}
