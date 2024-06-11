package longestpalindromicsubstring

// Adewumi Sunkanmi 2022

// 5. Longest Palindromic Substring
// Medium

// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

func longestPalindrome(s string) string {
    
    resLen := 0;
    res:= ""
    
    for i:=0; i< len(s); i++{
        // odd case
           l:=i;
           r:=i; 
           for l>=0 && r<len(s) && s[l] == s[r]{
                 if(r-l+1 > resLen){
                     resLen = r-l+1 
                     res = s[l:r+1]
                 }
               l-=1
               r+=1
           }
           l=i;
           r=i+1; 
           for l>=0 && r< len(s) && s[l] == s[r]{
                 if(r-l+1 > resLen){
                     resLen = r-l+1
                     res = s[l:r+1]
                 }
               l-=1
               r+=1
           }
        }
      
    return res
}