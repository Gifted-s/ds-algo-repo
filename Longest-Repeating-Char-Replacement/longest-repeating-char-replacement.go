
package longestrepeatingcharreplacement
import "math"
func characterReplacement(s string, k int) int {
    countMap := map[rune]int{}
    l:=0;
    r:=0;
    maxLength:=0
    stringRunes:=[]rune(s)
    for r< len(stringRunes){
        if val,ok:= countMap[stringRunes[r]];ok{
            countMap[stringRunes[r]]=val+1
        }else{
            countMap[stringRunes[r]]=1
        }
        largestOccurence := getMaxCount(countMap)
        if (r-l+1)-(largestOccurence)> k{
            countMap[stringRunes[l]]-=1
         l++
        }else{
           maxLength = int(math.Max(float64(maxLength), float64(r-l+1)))
        }
        r++
    }
    return maxLength
}


func getMaxCount(countMap map[rune]int )int{
    max :=0;
    for _, v:= range countMap{
         max = int(math.Max(float64(max), float64(v)))
    }
    
    return max
}