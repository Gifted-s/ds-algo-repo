package longestsubstringwithoutrepeatition

func lengthOfLongestSubstring(s string) int {
	l := 0
	length := 0
	charMap := map[byte]bool{}
	for r := 0; r < len(s); r++ {
		if charMap[s[r]] {
			for charMap[s[r]] {
				delete(charMap, s[l])
				l++
			}

		}
		charMap[s[r]] = true
		if length < (r - l + 1) {
			length = (r - l + 1)
		}
	}
	return length
}
