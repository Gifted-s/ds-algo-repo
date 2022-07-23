// Adewumi Sunkanmi 2022
// 73. Set Matrix Zeroes
// Medium

// 8187

// 522

// Add to List

// Share
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1
 

// Follow up:

// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

package setmatrixtozero





func setZeroes(matrix [][]int)  {
    
  row, col := len(matrix), len(matrix[0])
  rowZero:= false;
  
  for i:=0; i<row;i++{
       for j:=0; j< col;j++{
           if matrix[i][j] ==0{
               matrix[0][j] =0;
           if i > 0{
               matrix[i][0] =0;
           }else{
               rowZero=true
           }
          }
       }
  }
  
   for i:=1; i< row;i++{
       for j:=1; j< col;j++{
           // check for zero row
           if matrix[0][j] == 0 || matrix[i][0] == 0 {
               matrix[i][j] = 0
           }
       }
   }
  
 if matrix[0][0] == 0{
   for j:=0; j< row;j++{
      matrix[j][0] = 0
    }
   }
  
  
   if rowZero {
   for j:=0; j< col;j++{
      matrix[0][j] = 0
      }
   }
  
  
 
  
  
  
}

