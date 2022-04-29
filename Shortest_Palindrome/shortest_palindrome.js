/**
 * @param {string} s
 * @return {string}
 */
 var shortestPalindrome = function(s) {
    // create str1 
    let str1 = ""
    // create str2
    let str2= ""
    // create a reversed string 
    let reverse_string = ""
    let final_string =""
    for(let i=0; i< s.length; i++  ){
        reverse_string = s[i] +  reverse_string
    }
      // for i of s
    for(let i=0; i< s.length; i++ ){
     // add char at index s.length-1-i in s to the back of str1
      str1 = str1+ s[s.length-1-i]
     // add char at index s.length-1- i in s to the front of str2
      str2 =  s[s.length-1-i] + str2
     // compare str1+ s with reversed_string+str2
        if((str1 +s) == (reverse_string + str2)){
        // if equal
        // the first palindrome will be the shortest
         final_string = (reverse_string + str2)
         break
        }
    }
  return final_string
};

console.log(shortestPalindrome("aacecaaa"))
