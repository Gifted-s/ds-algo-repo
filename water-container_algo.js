/**
 * @param {number[]} height
 * @return {number}
 */
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
        if(!hashTable[currentHeight]){
            hashTable[currentHeight]= i
            if(currentHeight < prevMax.value){
                 let difference = i -  prevMax.index
                  let area = difference * currentHeight;
                  if(area > maxValue){
                     maxValue = area
                      continue
                   }      
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
  
      return maxValue
      
  };
  // time complexity 0(n)
  // I solved this on leet code