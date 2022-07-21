package validprenthesisstring
// 678. Valid Parenthesis String
// Medium

// 3602

// 89

// Add to List

// Share
// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "(*)"
// Output: true
// Example 3:

// Input: s = "(*))"
// Output: true


func checkValidString(s string) bool {
    leftMin:= 0;
    leftMax:=0;
    
    for i:=0;i<len(s);i++{
        if string(s[i]) =="("{
            leftMin+=1
            leftMax+=1
        }else if string(s[i]) ==")"{
            leftMin-=1
            leftMax-=1
        }else{
            leftMin -=1
            leftMax +=1
        }
        if leftMax<0{
            return false
        }
         if leftMin<0{
            leftMin =0;
        }
    }
    return leftMin==0
}