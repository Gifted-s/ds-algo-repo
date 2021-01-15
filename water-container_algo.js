/**
 * @param {number[]} height
 * @return {number}
 */

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
// Example 3:

// Input: height = [4,3,2,1,4]
// Output: 16
// Example 4:

// Input: height = [1,2,1]
// Output: 2
 

// Constraints:

// n == height.length
// 2 <= n <= 3 * 104
// 0 <= height[i] <= 3 * 104

var maxArea = function(height) {
    let prevMax= {
        value:0,
        index:0
    }
    let hashTable = {};
    let maxValue=0;
    for(let i=0; i< height.length; i++){
        let currentHeight = height[i]
          if(prevMax.value < currentHeight){
            prevMax.value = currentHeight
            prevMax.index = i
           }
        if(!(currentHeight.toString() in hashTable)){
            hashTable[currentHeight]= i
     
                 let difference = i -  prevMax.index
                  let area = difference * currentHeight;
                  if(area > maxValue){
                     maxValue = area
                      continue
                   }      
           
            
        }
        else{
          let difference = i -  hashTable[currentHeight]  
          let area = difference * currentHeight;
          if(area > maxValue){
              maxValue = area
          }
        }
          
          
    }
    // <page name>_<youname>
  
      return maxValue
      
  };
  // time complexity 0(n)
  // I solved this on leet code


  // optimized
// function maxArea(height){
//     let maxarea = 0, l = 0, r = height.length - 1;
//     while (l < r) {
//         maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
//         if (height[l] < height[r])
//             l++;
//         else
//             r--;
//     }
//     return maxarea;
// }
 