/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    // create array of alphabets
    let alphabets = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    // create array to store result
    let result = [""];
    // loop through each digit 
    for (let i = 0; i < digits.length; i++) {
        let current_digit = parseInt(digits[i])
        // create temporary list to store new result
        let temp_list = []
        // loop throgh previous result (array of string combinations)
        for (let j of result) {
            // iterate throgh all the characters in current digit index and add to each string in previous result
            for (let k of alphabets[current_digit].split("")) {
                temp_list.push(j + k)
            }

        }
        result = temp_list

    }

return result
};

console.log(letterCombinations("23"))

//output
//   [
//     'ad', 'ae', 'af',
//     'bd', 'be', 'bf',
//     'cd', 'ce', 'cf'
//   ]