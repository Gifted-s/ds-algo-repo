package productofarrayexceptself


func productExceptSelf(nums []int) []int {
    // create output array and fill it up with 1
    output :=[]int{}
    for i:=0;i< len(nums);i++{
        output = append(output, 1)
    }
    // create prefix as 1 
    prefix :=1
    // create postfix as 1
    postfix:=1
    // starting from i+1 to the end of  nums
    for i:=1; i< len(nums); i++{
     // multiply prefix with nums[i]
        output[i] = nums[i-1]* prefix
     // restet prefix 
        prefix = output[i]
    }
    // starting end to front of output
    for i:=len(output)-1; i>=0 ;i--{
      // multiply postfix with output end 
        output[i]= output[i]* postfix
      // reset postfix to nums[end] * postfix
        postfix = nums[i]* postfix
    
    }
     return output
}