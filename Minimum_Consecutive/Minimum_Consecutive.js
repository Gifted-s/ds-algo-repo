function minimum_consecutive(N) {
    let count = 0;
    let n = 2;
    while ((2 * N) + n - (n ** 2) > 0) {
        a = ((2 * N) + n - (n ** 2)) / (2 * n)
        if(a - parseInt(a) === 0){
            console.log(a,n)
            count ++
        }
        n+=1
    }
    return count
}

console.log(minimum_consecutive(100))