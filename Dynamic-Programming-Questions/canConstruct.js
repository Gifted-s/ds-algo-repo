



//  function conConstruct(arr, s){
   
//     function canConctructHelper(i){
//         if (i>=s.length){
//             return true
//         }
//         for (let j=i; j< s.length; j++){
//           let substring= s.slice(i,j+1)
//            for(let elem of arr){
//             if (substring === elem){
                
//                if(canConctructHelper(j+1)) {
//                 return true
//                }
//             }
//            }
//         }
//         return false
//     }

//    return canConctructHelper(0)
// }

// Optimized with Memoization
function conConstruct(arr, s){
   
    function canConctructHelper(target, memo={}){
        if (target in memo){
            return memo[target]
        }
        if (target==""){
            return true
        }

        for (let word of arr){
          if(target.indexOf(word)===0){
            const suffix = target.slice(word.length)
            if (canConctructHelper(suffix, memo)){
                memo[target] = true
                return true
            }
          }
        }
        
        memo[target] = false
        return false
    }

   return canConctructHelper(s)
}



//console.log(conConstruct(["ab","abc", "cd", "def", "abcd"], "abcdef"))

console.log(conConstruct(["e","ee", "eee", "eeee", "eeeee", "eeeeee"], "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef"))