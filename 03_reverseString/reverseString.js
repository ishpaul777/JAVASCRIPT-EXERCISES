const reverseString = function(string) {
    let result = string.split("");
    let reversed = []
    for (i = result.length - 1; i >= 0; i--){
        reversed.push(result[i]);
    }
    let answer = reversed.join('')
    return answer
};

// Do not edit below this line
module.exports = reverseString;
