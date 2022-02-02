function gcd_of_string(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    else if (str1 === str2) {
        return str1
    }
    else if (str1.length > str2.length) {
        return gcd_of_string(str1.substr(str2.length), str2)
    } 
    else {
        return gcd_of_string(str2.substr(str1.length), str1)
    }

}

console.log(gcd_of_string("ABCABC", "ABC"))