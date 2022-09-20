package main

// import "fmt"



// func howSum(arr []int, n int) [][]int {
//     result := [][]int{}
// 	var howSumHelper func(target int , subset []int ) 
// 	howSumHelper = func(target int, subset []int)  {
// 		if target < 0 {
// 			return 
// 		}

// 		if target == 0 {
// 			dst := make([]int, len(subset))
// 			copy(dst, subset)
// 			result = append(result, dst)
// 			return 
// 		}
       
// 		for _, element := range arr {
// 			newTarget := target-element
// 			copySubset := make([]int, len(subset))
// 			copy(copySubset, subset)
//             copySubset = append(copySubset, element)
// 			howSumHelper(newTarget, copySubset)  
// 		}
// 	}
// 	howSumHelper(n, []int{})
// 	return result
// }





// Optimized with Memoization
// func howSum(arr []int, n int) [][]int {
//     result := [][]int{}
// 	var howSumHelper func(target int , subset []int, memo map[int][]int ) []int
// 	howSumHelper = func(target int, subset []int, memo map[int][]int)  []int {
// 		if target < 0 {
// 			return []int{}
// 		}

// 		if target == 0 {
// 			dst := make([]int, len(subset))
// 			copy(dst, subset)
// 			result = append(result, dst)
// 			return dst
// 		}

// 		if _, ok := memo[target];ok{
// 			return memo[target]
// 		}
       
// 		for _, element := range arr {
// 			newTarget := target-element
// 			copySubset := make([]int, len(subset))
// 			copy(copySubset, subset)
//             copySubset = append(copySubset, element)
// 			memo[newTarget] =  howSumHelper(newTarget, copySubset, memo) 
// 		}
// 		return subset
// 	}
// 	howSumHelper(n, []int{}, map[int][]int{})
// 	return result
// }

// func main() {
// 	fmt.Println(howSum([]int{5,4,3,7}, 1000))
// }
