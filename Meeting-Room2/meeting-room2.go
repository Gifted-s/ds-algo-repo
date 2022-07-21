// Adewumi Sunkanmi 2022
package meetingroom2
import (  
	"sort"
	"math"
)
// 919 · Meeting Rooms II
// Algorithms
// Medium
// Accepted Rate
// 53%
// Description
// Solution
// Notes
// Discuss
// Leaderboard

// Description
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.)

// Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)


// (0,8),(8,10) is not conflict at 8

// Example
// Example1

// Input: intervals = [(0,30),(5,10),(15,20)]
// Output: 2
// Explanation:
// We need two meeting rooms
// room1: (0,30)
// room2: (5,10),(15,20)
// Example2

// Input: intervals = [(2,7)]
// Output: 1
// Explanation: 
// Only need one meeting room



 //Definition of Interval:
 type Interval struct {
    Start, End int
 }
 

/**
 * @param intervals: an array of meeting time intervals
 * @return: the minimum number of conference rooms required
 */

func MinMeetingRooms(intervals []*Interval) int {
   start := []int{}
   end := []int{}
   for i:=0;i < len(intervals);i++{
	   startVal := intervals[i].Start
		   endVal := intervals[i].End
	   start = append(start, startVal)
	   end = append(end, endVal)
   }

   // Write your code here
   sort.Slice(start, func(i, j int) bool {
	   return i < j
   })
	 // Write your code here
   sort.Slice(end, func(i, j int) bool {
	   return i < j
   })

   s, e:=0,0;
   count, res:=0,0
   for s<len(intervals){
	if start[s] < end[e]{
	  count+=1
	  s+=1
	}else{
		count -=1
		e+=1;
	}
	res = int(math.Max(float64(res), float64(count)))
   }

return count;

}