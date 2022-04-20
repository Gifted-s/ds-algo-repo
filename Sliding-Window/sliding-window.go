package main

import "fmt"
// (2022),  Adewumi Sunkanmi
// The algorithm here uses the sliding window approach.
// Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
// Basically, we keep shifting window by one step while we subtract the element at the front of each previous window from the next one

func find_averages_of_subarrays(arr []int, k int) []float32{
	result := []float32{}
	windowStart := 0;
    windowSum := 0;

	for windowEnd:=0; windowEnd< len(arr); windowEnd++{
		windowSum += arr[windowEnd];
		if windowEnd >=k-1{
			result = append(result, float32(windowSum)/float32(k))
			windowSum -= arr[windowStart]
			windowStart+=1
		}
	}
	return result
}


func main(){
	fmt.Println(find_averages_of_subarrays([]int{1, 3, 2, 6, -1, 4, 1, 8, 2}, 5))
	// Output [2.2 2.8 2.4 3.6 2.8]
	
}

