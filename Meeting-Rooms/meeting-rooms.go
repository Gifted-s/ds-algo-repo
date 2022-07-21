// Adewumi Sunkanm 2022
package meetingrooms

import "sort"

// 920 · Meeting Rooms
// Algorithms
// Easy
// Accepted Rate
// 50%
// Description
// Solution
// Notes
// Discuss
// Leaderboard

// Description
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)

// (0,8),(8,10) is not conflict at 8

// Example
// Example1

// Input: intervals = [(0,30),(5,10),(15,20)]
// Output: false
// Explanation:
// (0,30), (5,10) and (0,30),(15,20) will conflict

//Definition of Interval:
type Interval struct {
	Start, End int
}

/**
 * @param intervals: an array of meeting time intervals
 * @return: if a person could attend all meetings
 */

func CanAttendMeetings(intervals []*Interval) bool {
	// Write your code here
	sort.Slice(intervals, func(i, j int) bool {

		return intervals[i].Start < intervals[j].Start
	})
	prevEnd := intervals[0].End
	for i := 1; i < len(intervals); i++ {
		start := intervals[i].Start
		end := intervals[i].End
		if start >= prevEnd {
			prevEnd = end
		} else {
			return false
		}
	}

	return true
}
