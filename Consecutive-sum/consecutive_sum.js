'use strict';


/*
 * Complete the 'consecutive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts LONG_INTEGER num as parameter.
 */

function consecutive(num) {
    // Write your code here
   let answer = 0;

   for(let j = 2; (j*(j+1))/2<= num; ++j){      
       if((num - (j*(j+1))/2)%j===0) answer++;
   }
   return answer;
}

