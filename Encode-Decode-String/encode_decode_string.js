// Copyright 2022, Adewumi Sunkanmi

// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode
// Examples
// Example1

// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]
// Explanation:
// One possible encode method is: "lint:;code:;love:;you"
// Example2

// Input: ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]
// Explanation:
// One possible encode method is: "we:;say:;:::;yes"


function encodeString(strArray) {
    let res = ''
    for (let str of strArray) {
        res += str.length + "#" + str
    }
    return res
}

console.log(encodeString( ["adewumi","code","love","you"]))
function decodeString(str) {
    const result = []
    let i = 0
    while (i < str.length) {
        let j = i;
        while (str[j] !== "#") {
            j += 1
            let length = parseInt(str.slice(i, j))
            result.push(str.slice(j + 1, j + 1 + length))
            i = j + 1 + length
        }
    }
    return result;
}
console.log(decodeString("7#adewumi4#code4#love3#you"))