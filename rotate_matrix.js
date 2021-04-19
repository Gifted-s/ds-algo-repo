// rotate an N*N matrix by 90 degrees
let test_mat =
    [[4, 4, 4, 4, 4],
    [0, 0, 0, 0, 4],
    [0, 0, 0, 0, 4],
    [0, 0, 0, 0, 4],
    [0, 0, 0, 0, 4]]

//     expected output =
//     [[0, 0, 0, 0, 4],
//     [0, 0, 0, 0, 4],
//     [0, 0, 0, 0, 4],
//     [0, 0, 0, 0, 4],
//     [4, 4, 4, 4, 4]]

function rotate_matrix(arr) {
    let inner_index = 0
    let times = 0
    let result = []
    let length_col=arr[0].length
    let i = length_col-1
    let temp = []
    while (i >= 0) {
        if (times ===length_col) {
            break
        }
        temp.push(arr[i][inner_index])
        if (i === 0) {
            inner_index++
            result.push(temp)
            temp = []
            times++
            i = length_col
        }
        i--
    }
    return result
}
// 0(n)
console.log(rotate_matrix(test_mat))