// Adewumi Sunkanmi :)
package reverseinteger


// 7. Reverse Integer
// Medium

// 7723

// 10211

// Add to List

// Share
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

func reverse(x int) int {
    const (
    MAX = 2147483647
    MIN = -2147483648
    )
    res:=0
    for x !=0{
        digit := x%10
        x=x/10
        
        if res > MAX/10 || (res==MAX && digit>=7){
            return 0
        }
        if res < MIN/10 || (res==MIN && digit<=7){
            return 0
        }
        res = (res*10) + digit
    }
    return res
}