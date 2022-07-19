package partitionlabels
//Adewumi Sunkanmi 2022
// 763. Partition Labels

// Medium

// 8035

// 305

// Add to List

// Share
// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

func partitionLabels(s string) []int {
    lastIndexMap:= map[string]int{}
      for i:=0; i< len(s);i++{
            lastIndexMap[string(s[i])]=i
    }
    size:=0;
    end:= 0;
    res:= []int{}
    for i:=0; i< len(s);i++{
        size+=1
        if lastIndexMap[string(s[i])] > end{
            end = lastIndexMap[string(s[i])]
        }
        if i==end{
            res = append(res, size)
            size=0
        }
    
    }
    return res
}