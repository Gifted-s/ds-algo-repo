package main

// import (
// 	"fmt"
// 	"strconv"
// )

// func GridTraveller(ROW,COL int) int{
//     paths:=0;
// 	var checkPath func(r,c int)
//     checkPath= func (r,c int) {
// 		if r ==0 && c == 0{
// 			paths +=1
// 			return
// 		}
// 		if r<0 || c<0 || c>= ROW || c>=COL {
// 			return
// 		}
// 		checkPath(r-1,c) // check up
// 		checkPath(r,c-1) // check left
// 	}

//    checkPath(ROW-1,COL-1)
//    return paths
// }




// Optimized by Memoization
// func GridTraveller(ROW, COL int) int {
// 	var checkPath func(r, c int, memo map[string]int) int
// 	checkPath = func(r, c int, memo map[string]int) int {
// 		if r == 0 && c == 0 {
// 			return 1
// 		}
// 		if r < 0 || c < 0 || c >= ROW || c >= COL {
// 			return 0
// 		}
// 		if _, ok := memo[convertKeyToString(r, c)]; ok {
// 			return memo[convertKeyToString(r, c)]
// 		}
// 		key := convertKeyToString(r, c)
// 		memo[key] = checkPath(r-1, c, memo) + checkPath(r, c-1, memo)
// 		return memo[key]
// 	}

// 	return checkPath(ROW-1, COL-1, map[string]int{})
// }

// func main() {
// 	r, c := 30, 30
// 	fmt.Println(GridTraveller(r-1, c-1))
// }

// func convertKeyToString(i1, i2 int) string {
// 	return strconv.Itoa(i1) + "," + strconv.Itoa(i2)
// }
