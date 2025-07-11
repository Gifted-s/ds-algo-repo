package longestsubstringwithoutrepeatition
func lengthOfLongestSubstringV2(s string) int {
    if len(s) == 0{
        return 0
    }
    hash:= make(map[byte]bool)
    l:=0
    max:=0
    for r:=0; r<len(s); r++ {
        if _, ok:=hash[s[r]]; ok{
         for hash[s[r]] {
            delete(hash, s[l])
            l++
         }
        }
        dif := r-l+1
        if dif > max{
            max = dif
         }
        hash[s[r]]=true
    }
    return max
}

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
