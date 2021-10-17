/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    // store final_string
    let final_string= ""
    
    // store temporal_string
    let temporal_string = ""
    
    // store current_reverse_string 
    let current_reverse_string= ""
    
    // for each i
    for (let i = 0;  i <s.length; i ++){
        let parent_char= s[i]
        current_reverse_string =parent_char
        temporal_string= parent_char
        // loop through character starting from index i + 1
          for (let j = i+1; j< s.length; j++){
               // check if the current character equals the parent character
                let current_char = s[j]
                // add to reverse string
                current_reverse_string = current_char + current_reverse_string
                temporal_string += current_char
                if(current_char == parent_char){ 
                // check if they are palindrome by comparing temporal and reverse string
                  // if they are, 
                    if(current_reverse_string === temporal_string){
                        // check if the length of the temporal_string is greater than the length of the final_string 
                        if(temporal_string.length > final_string.length){
                             // if so, replace the  final_string  with the temporal_string
                             final_string = temporal_string
                              
                        }
                       
                    }
                    
                }
      
             // if the child index  equals the string length - 1 
              if(j == s.length - 1){
                  // reset current_reverse_string 
                  current_reverse_string = ""
                  // reset temporal_string
                  temporal_string = ""
              }
                 
          }
  
    }
    
                  
    // return final_string 
    if(final_string.length===0){
        return s[0]
    }
    return final_string
};

console.log(longestPalindrome("ac"))