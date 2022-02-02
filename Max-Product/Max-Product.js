// function sub_array_product(sub_array){
//     // create variable to store multiplication of all element in subarray
//     let sub_array_multiplication = 1;
//     //for each sub array
//     for(let j=0; j<sub_array.length; j++){ 
//    // multiply element with exiting multiplication
//       sub_array_multiplication *=  sub_array[j]
//     }
//     return sub_array_multiplication;
//  }
/**
 * @param {number[]} nums
 * @return {number}
 */

// // Brute Force Approach O(n^2)
// var maxProduct = function(nums) {
//     if(nums.length ==0){
//         return 0;
//     }
//    // create largest product variable
//     let largest_product = nums[0];
//     // loop throgh the array starting from i 
//     for(let i = 0; i <nums.length;i++){
        
//         //create temporary array
//         let temp_array=[]
//        // loop throgh starting from index i
//        for(let j=i; j<nums.length; j++){
//            temp_array.push(nums[j])
//            let product = sub_array_product(temp_array)
//           if(product >largest_product ){
//               largest_product = product;
//           }
//        }
//         // reset sub array
//        temp_array=[];
//     }

//     // return largest product variable
//     return largest_product;
    
// };


// Optimized Approach 0(n)

function maxProduct(nums) {
    // final result 
    let final_result= nums[0];
    // creste variable to store current max
    let max = nums[0]
    // creste variable to store current min
    let min = nums[0]
    // create variable to store current min
    // loop throgh nums
    for(let i=1; i< nums.length; i++){
       // check if nums[i] is 0
       if(nums[i]==0){
           // reset max to 1
           max = 1
           // reset min to 1
           min = 1
           // skip the rest of the code
           continue
       }
       // create temp max variable
       temp_max = max;
       // find max between nums[i], max * nums[i], min* nums[i]
       max = Math.max(nums[i],temp_max * nums[i], min * nums[i] )
       // find min between nums[i], max * nums[i], min* nums[i]
       min=  Math.min(nums[i],temp_max * nums[i], min * nums[i] )
       if(final_result<max ){
           final_result= max
       }
    }

    // return current max
    return final_result
}
console.log(maxProduct([2,3,-2,4,-2,0,20]))