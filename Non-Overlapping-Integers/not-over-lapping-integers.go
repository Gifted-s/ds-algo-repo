package nonoverlappingintegers
// Adewumi Sunkanmi 2022
import (
	"math"
	"sort"
)


// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

// Constraints:

// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104
// Accepted
// 274.4K
// Submissions
// 560K
// Seen this question in a real interview before?


func eraseOverlapIntervals(intervals [][]int) int {
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
   
   res:=0
   prevEnd := intervals[0][1]
   for i:=1; i< len(intervals);i++{
	   start:= intervals[i][0]
	   end:= intervals[i][1]
	   if start>= prevEnd{
		   prevEnd = end;
	   }else{
		   res+=1
		   prevEnd = int(math.Min(float64(prevEnd), float64(end)))
	   }
   }
   return res;
}