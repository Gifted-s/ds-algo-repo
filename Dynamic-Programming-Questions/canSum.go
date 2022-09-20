package main

// import "fmt"


// // Optimized with memoization
// func canSum(arr []int, n int) bool {

// 	var canSumHelper func(target int, memo  map[int]bool) bool
// 	canSumHelper = func(target int, memo  map[int]bool) bool {
// 		if target < 0 {
// 			return false
// 		}

// 		if target == 0 {
// 			return true
// 		}
//         if _, ok := memo[target];ok{
// 			return  memo[target]
// 		}
// 		for _, element := range arr {
// 			newTarget := target-element
//             memo[newTarget] = canSumHelper(newTarget, memo)
// 			if  memo[newTarget]  {
// 				return true
// 			}
// 		}
// 		return false
// 	}

// 	return canSumHelper(n, map[int]bool{})
// }

// func main() {
// 	fmt.Println(canSum([]int{5,4,3,7}, 7))
// }
