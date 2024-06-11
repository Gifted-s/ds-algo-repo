package main

import "fmt"

// func bestSum(arr []int, n int) []int {
//  result := make([]int, n)
// 	var bestSumHelper func(target int , subset []int )
// 	bestSumHelper = func(target int, subset []int)  {
// 		if target < 0 {
// 			return
// 		}

// 		if target == 0 {
// 			dst := make([]int, len(subset))
// 			copy(dst, subset)
// 			if len(dst) < len(result){
// 				result = dst
// 			}

// 			return
// 		}

// 		for _, element := range arr {
// 			newTarget := target-element
// 			copySubset := make([]int, len(subset))
// 			copy(copySubset, subset)
//             copySubset = append(copySubset, element)
// 			bestSumHelper(newTarget, copySubset)
// 		}
// 	}
// 	bestSumHelper(n, []int{})
// 	return result
// }

// Optimized with Memoization
func bestSum(arr []int, n int) []int {
	result := make([]int, n)
	var bestSumHelper func(target int, subset []int, memo map[int][]int) []int
	bestSumHelper = func(target int, subset []int, memo map[int][]int) []int {
		if target < 0 {
			return []int{}
		}

		if target == 0 {
			dst := make([]int, len(subset))
			copy(dst, subset)
			if len(dst) < len(result) {
				result = dst
			}

			return dst
		}

		if _, ok := memo[target]; ok {
			return memo[target]
		}

		for _, element := range arr {
			newTarget := target - element
			copySubset := make([]int, len(subset))
			copy(copySubset, subset)
			copySubset = append(copySubset, element)
			memo[newTarget] = bestSumHelper(newTarget, copySubset, memo)
		}
		return subset
	}
	bestSumHelper(n, []int{}, map[int][]int{})
	return result
}

func main() {
	fmt.Println(bestSum([]int{5, 4, 3, 2, 1}, 1000))
}
