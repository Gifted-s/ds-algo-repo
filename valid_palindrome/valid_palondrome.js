//Copryright Adewumi Sunkanmi 2022
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase()
    let left_pointer = 0
    let right_pointer = s.length - 1
    while (left_pointer < right_pointer) {
        if (!isAlphaNumeric(s[left_pointer])) {
            left_pointer++
        }
        else if (!isAlphaNumeric(s[right_pointer])) {
            right_pointer--
        }
        else {
            if (s[left_pointer] !== s[right_pointer]) {
                return false
            }
            left_pointer++
            right_pointer--
        }
    }
    return true
};

function isAlphaNumeric(c) {
    if ((c.charCodeAt(0) >= "A".charCodeAt(0) && c.charCodeAt(0) <= "Z".charCodeAt(0)) || (c.charCodeAt(0) >= "a".charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0)) || (c.charCodeAt(0) >= "0".charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0))) {
        return true
    }
    return false
}