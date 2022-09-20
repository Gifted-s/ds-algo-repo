// function climbingStairs(num) {
//     function checkPath(n, dp = {}) {
//         if (n in dp) {
//             return dp[n]
//         }
//         if (n == 0) {
//             return 1
//         }

//         if (n == 1) {
//             return 1
//         }

//         if (n == 2) {
//             return 2
//         }
//         if (n< 0){
//             return 0
//         }
//         dp[n] = checkPath(n - 1, dp) + checkPath(n - 2, dp)
//         return dp[n]
//     }

//     return checkPath(num)
// }

function climbingStairs(num) {
        let dp=[1,1]
        for (let i=2; i<=num;i++ ){
            dp[i] = dp[i-1] + dp[i-2]
        } 
    return dp[num]
}


console.log(climbingStairs(5))