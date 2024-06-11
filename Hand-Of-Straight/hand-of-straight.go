// Adewumi Sunkami 2022
package handofstraight
import "container/heap"
// 846. Hand of Straights
// Medium
// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

 

// Example 1:

// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
// Example 2:

// Input: hand = [1,2,3,4,5], groupSize = 4
// Output: false
// Explanation: Alice's hand can not be rearranged into groups of 4.

 

// Constraints:

// 1 <= hand.length <= 104
// 0 <= hand[i] <= 109
// 1 <= groupSize <= hand.length


// An IntHeap is a min-heap of ints.
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	// Push and Pop use pointer receivers because they modify the slice's length,
	// not just its contents.
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}


func isNStraightHand(hand []int, groupSize int) bool {
    if len(hand)%groupSize>0{
        return false
    }
    cardKeys := map[int]int{}
    h := &IntHeap{}
	heap.Init(h)
	
    for i:=0; i< len(hand);i++{
        if v, ok := cardKeys[hand[i]]; ok{
            cardKeys[hand[i]] = v+1
        }else{
            cardKeys[hand[i]]=1
        }
    }
    for k, _:= range cardKeys{
       heap.Push(h, k)
    }
    for h.Len()>0{
        first := (*h)[0]
        for i:=first; i< (groupSize+first);i++{
            if _, ok := cardKeys[i]; !ok{
                return false
            }
            cardKeys[i]=cardKeys[i]-1
            
            if cardKeys[i]==0{
                if _,ok :=cardKeys[i]; ok{
                    if (*h)[0] != i{
                        return false
                    }else{
                    heap.Pop(h)
                }
             }
            }
        }
    }

    return true
}

