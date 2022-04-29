// Copyright 2022, Adewumi Sunkanmi
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    if(nums.length==0){
        return false
    }
    const map ={}
    for(let i of nums){
        if(!map[i]){
            map[i] = true
        }else{
           return true
        }
        
    }
    
    return false
};