// Adewumi Sunkanmi 2022
package spiralmatrix

// 54. Spiral Matrix
// Medium

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100


func spiralOrder(matrix [][]int) []int {
    top, bottom:= 0, len(matrix)
    left, right:= 0, len(matrix[0])
    res :=[]int{}
    for left < right && top < bottom {
        for i:=left; i<right; i++{
            res = append(res, matrix[top][i])
        }
        top+=1;
        
        for i:=top; i<bottom; i++{
            res = append(res, matrix[i][right-1])
        }
        right-=1;
        
        if !(left< right && top< bottom){
            break
        }
        
        for i:=right-1; i>=left; i--{
            res = append(res, matrix[bottom-1][i])
        }
        bottom-=1;
        
        for i:=bottom-1; i>=top; i--{
            res = append(res, matrix[i][left])
        }
        left+=1;
        
    }
    return res
}