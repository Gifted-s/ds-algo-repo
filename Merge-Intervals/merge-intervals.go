// Adewumi Sunkanmi 2022
package mergeintervals
import (
	"sort"
	"math"
)
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104


func merge(intervals [][]int) [][]int {
    sort.Slice(intervals, func(i, j int) bool {
    // edge cases
    if len(intervals[i]) == 0 && len(intervals[j]) == 0 {
        return false 
    }
    if len(intervals[i]) == 0 || len(intervals[j]) == 0 {
        return len(intervals[i]) == 0
    }
    return intervals[i][0] < intervals[j][0]
   })
    
    output := [][]int{intervals[0]}
    
    for i:=1; i< len(intervals);i++{
        start:= intervals[i][0]
        end:= intervals[i][1]
        lastInputIndex := len(output)-1
        if start <= output[lastInputIndex][1]{
            output[lastInputIndex][1] = int(math.Max(float64(end), float64(output[lastInputIndex][1])))
        }else{
            output =append(output, []int{start,end})
        }
    }
    return output
}