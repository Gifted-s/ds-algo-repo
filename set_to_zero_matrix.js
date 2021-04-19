let input = [
  [1, 1, 1, 1],
  [1, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

// loop through each element in the matrix
// if a zero element is encountered
//loop through all elements in that inner array and set it to zero
// locate the index of the element in other arrays and set it to zero
// first solution
function set_to_zero(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let l = 0; l < matrix.length; l++) {
          matrix[l][j] = 0;
        }
        for (let k = 0; k < matrix[i].length; k++) {
          matrix[i][k] = 0;
        }

        return matrix
      }
    }
  }
  return matrix;
}

// let tracker =[]
// function set_to_zero(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === 0) {
//          tracker.push([i,j])
//         }
//       }
//     }
//     for(let m=0; m<tracker.length;m++){
//         for(let k=0; k<matrix.length;k++){
//             //set column to zero
//            matrix[k][tracker[m][0]]=0
//         //    matrix[tracker[m][1]]
//         }
//     }
//     return matrix;
//   }

console.log(set_to_zero(input));
