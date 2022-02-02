function min_swap(arr) {
    let min_swap = 0, index = 0, temp;
    while (index < arr.length) {
        if (index + 1 != arr[index]) {
            temp = arr[index]
            arr[index] = arr[arr[index] - 1]
            arr[temp - 1] = temp
            min_swap++
        }
        else {
            index++
        }

    }
    console.log(arr)
    return min_swap
}


console.log(min_swap([7, 1, 3, 2, 4, 5, 6] ))