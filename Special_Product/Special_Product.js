function special_product(nums) {
    let left_product = new Array(nums.length +1)
    let right_product = new Array(nums.length +1)
    let output = new Array(nums.length)
    left_product.fill(1)
    right_product.fill(1)
   
    for(let i=1; i<=nums.length; i++){
        left_product[i] = nums[i-1] * left_product[i-1] 
    }
    for(let i=nums.length-1; i>=0; i--){
        right_product[i] = nums[i] * right_product[i+1] 
    }
    for(let i =0; i <nums.length; i++){
        output[i] = left_product[i] * right_product[i+1]
    }
    return output
}

console.log(special_product([1,2,3,4,5]))