package validanagrams
func isAnagram(s string, t string) bool {
    if len(s) != len(t){
        return false;
    }
    alphCount := map[rune]int{};
   
    for _, i := range s{
        if alphCount[i] != 0 {
            alphCount[i]+=1;
        }else{
            alphCount[i]=1;
        }
    }


    for _, i := range t{
        if alphCount[i] == 0 {
            return false
        }else{
            alphCount[i]-=1;
        }
    }
    return true;
}