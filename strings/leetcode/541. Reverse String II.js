/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const chars = s.split('');
    for (let i = 0; i < s.length; i += 2 * k) {
        let start = i;
        let end = Math.min(i + k - 1, s.length - 1);
        while (start < end) {
            [chars[start], chars[end]] = [chars[end], chars[start]];
            start++;
            end--;
        }
    }
    return chars.join('');
};

var reverseStr2 = function(s, k) {
    let result = '';
    for (let i = 0; i < s.length; i += 2 * k) {
        let chunk = s.slice(i, i + k);
        let reversedChunk = chunk.split('').reverse().join('');
        result += reversedChunk + s.slice(i + k, i + 2 * k);
    }
    return result;
};


console.log(reverseStr("abcdefg", 2))
console.log(reverseStr("abcd", 2))