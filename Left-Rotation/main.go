package main

import "fmt"

func main() {
	arr := []int{1, 2, 3, 4, 5}
	result := left_rotation(arr, 2)
	fmt.Println(result)
}

func left_rotation(arr []int, step int) []int {
	// store the array length
	length := len(arr)
	result := make([]int, length)
	i := 0
	// loop through arr
	for i < length {
		// get difference between current_index and step
		diff := i - step
		// if difference is negative
		if diff < 0 {
			// add array size to difference
			diff += length
		}
		// set element at current_index - step to elememt at current_index
		result[diff] = arr[i]
		i++
	}
	// return arr
	return result
}
