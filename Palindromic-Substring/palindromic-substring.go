package palindromicsubstring

// Adewumi Sunkanmi 2022

// 647. Palindromic Substrings
// Medium

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 
func countSubstrings(s string) int {
    res:= []string{}
    for i:=0; i< len(s); i++{
        // odd case
           l:=i;
           r:=i; 
           for l>=0 && r<len(s) && s[l] == s[r]{
               res = append(res, s[l:r+1])
               l-=1
               r+=1
           }
           l=i;
           r=i+1; 
           for l>=0 && r< len(s) && s[l] == s[r]{
               res = append (res, s[l:r+1])
               l-=1
               r+=1
           }
        }
        return len(res)
 
}