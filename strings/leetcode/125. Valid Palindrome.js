/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome1 = function(s) {
    s = s.trim().replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    return s == s.split('').reverse().join('');
};

var isPalindrome2 = function(s) {

    const filterNonAlphabet = (str) => {
        return str.replace(/[^0-9a-zA-Z]/g, '');
    };

    s = s.trim();
    s = filterNonAlphabet(s);
    s = s.toLowerCase();
    let rev_s = s.split('').reverse().join('');
    return rev_s === s;
};

var isPalindrome = function(s) {
    const regex = /[a-z0-9]/i
    
    let start = 0
    let end = s.length - 1

    while (start < end) {

        while (start < end && !regex.test(s[start])) {
            start++;
        }

        while (start < end && !regex.test(s[end])) {
            end--;
        }

        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }

        start++;
        end--;
        
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome(" "))