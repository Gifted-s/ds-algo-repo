



//  function countConstruct(arr, s){
//     let count =0;
//     function countConstructHelper(i){
        
//         if (i>=s.length){
//             count++
//             return true
//         }
//         for (let j=i; j< s.length; j++){
//           let substring= s.slice(i,j+1)
//            for(let elem of arr){
//             if (substring === elem){
                
//                if(countConstructHelper(j+1)) {
//                 return true
//                }
//             }
//            }
//         }
//         return false
//     }

//    countConstructHelper(0)
//    return count
// }

// Optimized with Memoization
function countConstruct(arr, s){
    let count =0;
    function countConstructHelper(target, memo={}){
        if (target in memo){
            return memo[target]
        }
        if (target==""){
            count++;
            return true
        }

        for (let word of arr){
          if(target.indexOf(word)===0){
            const suffix = target.slice(word.length+1)
            if (countConstructHelper(suffix, memo)){
                memo[target] = true
            }
          }
        }
        
        memo[target] = false
        return false
    }

   countConstructHelper(s)
   return count
}



//console.log(countConstruct(["ab","abc", "cd", "def", "abcd", "abcdef"], "abcdef"))

console.log(countConstruct(["e","ee", "eee", "eeee", "eeeee", "eeeeee"], "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef"))