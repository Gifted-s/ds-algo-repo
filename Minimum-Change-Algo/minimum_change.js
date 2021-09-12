// Copyright Adewumi Sunkanmi Data structures Repository 
// sunkanmiadewumi1@gmail.com
// Limited number of changes algorithm
// changes allowed
//insert
//remove
//delete
// 0. check for the length of the strings,if the difference between the strings is more than i.e greater than 1 then we can actually return false immediately
// 1. convert string_to_check to object,key is the char and value is the number of occurence
// 2. check if each charcter of string is in string, 
// 3. if char exist, reduce its number of occurence in string
// 3. if a char exist in string and does not exist in string_to_check then increment no_of_change by 1
// 4. once no_of_change is greater than 1, then return false

let no_of_change = 0;

let str = 'pale'
let str1 = 'bale'
let hash = {}

function check_string(string, string_to_check) {
    if (string_to_check.length - string.length > 1) {
        return false
    }
    for (let i of string) {
        hash[i] = hash[i] ? hash[i] + 1 : 1
    }
    for (let i of string_to_check) {
        if (i in hash) {
            hash[i]--
            continue
        }
        no_of_change++
        if (no_of_change > 1) {
            return false
        }
    }

    return true;
}
// O(n) time complexity

console.log(check_string(str, str1))
