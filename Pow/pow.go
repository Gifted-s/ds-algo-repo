package pow
// Adewumi Sunkanmi 2022
import "math"

// 50. Pow(x, n)
// Medium
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= xn <= 104



func myPow(x float64, n int) float64 {
    var helper  func(x float64, n int) float64
    helper = func(x float64, n int) float64 {
        if x ==0 {
            return 0
        }
        if n==0{
            return 1
        }
        res:= helper(x , n/2)
        res = res * res
        if int(n)%2>0 {
            res = float64(float64(res) * float64(x))
        }
        return res
    }
    res := helper(x,int(math.Abs(float64(n))) )
    if n<0 {
        res = 1/res
        return res
    }
    return float64(res)
}