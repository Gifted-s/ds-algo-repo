
// Optimized with Memoization
function howConstruct(arr, target){
    let res = []
    function howConctructHelper(target,combination=[], memo ={}){

        if (target in memo){
           return memo[target]
        }

        if (target==""){
            return []
        }

        for (let word of arr){
          if(target.indexOf(word)===0){
            const suffix = target.slice(word.length)
            memo[target] =  memo[target] ?  memo[target].push([ ...combination, word ]) : [[ ...combination, word ]]
            let ways = howConctructHelper(suffix, [ ...combination, word ], memo)
            if (ways && ways.length==0){
                res.push([ ...combination, word ])
            }
          }
        }

    }
    howConctructHelper(target, [])
    return res
}

console.log(howConstruct(["purp", "p", "ur", "le", "purpl"], "purple"))

//console.log(howConstruct(["e","ee", "eee", "eeee", "eeeee", "eeeeee"], "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"))