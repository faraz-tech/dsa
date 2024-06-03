/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = function(s) {
    let arr = s.split(" ");
    for(let i=arr.length-1;i>=0;i--) {
        if(arr[i] != '') {
            return arr[i].length;
        }
    }
};

var lengthOfLastWord2 = function(s) {
    let arr = s.trim().split(" ");
    return arr[arr.length - 1].length;
};

var lengthOfLastWord = function(s) {
    s = s.trim();

    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
        } 
        else if (length > 0) {
            break;
        }
    }

    return length;
};



console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("a"));