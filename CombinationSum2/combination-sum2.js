// Adewumi Sunkanmi
// 40. Combination Sum II
// Medium
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    candidates= candidates.sort()
    let result = []
    
    function dfs(i, subset, total){
        if(total === target){
            result.push([...subset])
            return
        }
        if(i >= candidates.length || total > target ){
            return
        }
        // we decide to add candidates[i]
        subset.push(candidates[i])
        dfs(i+1,subset, total+candidates[i])
        
        // we decide not to add candidates[i]
        subset.pop()
        while(i+1< candidates.length && candidates[i] === candidates[i+1]){
            i+=1;
        }
        dfs(i+1, subset, total )
    }
    
    dfs(0,[],0)
    
    return result
};