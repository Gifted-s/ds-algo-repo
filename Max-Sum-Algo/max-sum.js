// For an array of integers, give an algorithm to determine if there are 3 elements 
// that sum to zero. What are the time and space complexity? 
// Generalize to the case where the sum of k elements is 0?
const nums = [-1,0,1,2,-1,-4]
function maxSum (nums){
    let result=[]
nums.sort((a,b)=>(a-b) )
for(let i =0; i<nums.length-2; i++){
    if(nums[i]> 0) continue
    if(nums[i] === nums[i-1]) continue
    let a = i;
    let b = i + 1
    let c = nums.length-1
    while(b<c){
        let sum = nums[a] + nums[b] + nums[c]
        if(sum===0){
           result.push([nums[a], nums[b], nums[c]])
           b++
           c--
        }
        if(sum < 0){
            if(nums[c]===nums[c+1]) c-=2
            else c--
        }
        if(sum > 0){
            if(nums[b]===nums[b+1]) b+=2
            else b++
        }
    }
}
return result
}

console.log(maxSum(nums))

