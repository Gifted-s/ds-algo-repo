// Adewumi Sunkanmi 2022
package multiplystrings
import "strconv"
// 43. Multiply Strings
// Medium

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

func multiply(num1 string, num2 string) string {
    if num1=="0" || num2=="0"{
        return "0"
    }
    res:= []int{}
    for i:=0; i<len(num1)+len(num2); i++{
        res = append(res, 0)
    }
    
    num1, num2 = Reverse(num1), Reverse(num2)
    num1Runes := []rune(num1)
    num2Runes := []rune(num2)
    for i:=0; i< len(num1Runes);i++{
        for j:=0; j< len(num2Runes);j++{
            n1, _:= strconv.Atoi(string(num1Runes[i]))
            n2, _:= strconv.Atoi(string(num2Runes[j]))
            digit:= n1*n2
            res[i+j] += digit
            // more than 9
            res[i+j+1] += (res[i+j]/10)
            res[i+j] = (res[i+j]%10)  
        }
    }
    for i, j := 0, len(res)-1; i < j; i, j = i+1, j-1 {
        res[i], res[j] = res[j], res[i]
    }
    start :=0;
    for start < len(res) && res[start]==0{
            start+=1
    }
    res = res[start:]
    finalRes :=""
    for i:=0; i< len(res); i++{
        finalRes += strconv.Itoa(res[i])
    }
    return finalRes
}

  func Reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
  }
    