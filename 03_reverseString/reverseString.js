const reverseString = function (string) {
    let result = "";
    const reverse = [];

    for (let i = 0; i < string.length; i++) {
        reverse[i] = string.charAt(i);
    }

    for (let i = reverse.length - 1; i >= 0; i--) {
        result += reverse[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
